'use client'

import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Eye, Upload, ImagePlus, X } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { toast } from "@/hooks/use-toast";

const Gallery = () => {
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isViewImageOpen, setIsViewImageOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [imageToDelete, setImageToDelete] = useState<number | null>(null);
  
  const [galleryImages, setGalleryImages] = useState([
    "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9",
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
    "https://images.unsplash.com/photo-1519501025264-65ba15a82390",
    "https://images.unsplash.com/photo-1510511459019-5dda7724fd87",
    "https://images.unsplash.com/photo-1473308822086-178fd4e9420d",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  ]);

  const handleViewImage = (image: string) => {
    setCurrentImage(image);
    setIsViewImageOpen(true);
  };

  const handleDeletePrompt = (index: number) => {
    setImageToDelete(index);
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteImage = () => {
    if (imageToDelete !== null) {
      const newGalleryImages = [...galleryImages];
      newGalleryImages.splice(imageToDelete, 1);
      setGalleryImages(newGalleryImages);
      toast({
        title: "Image deleted",
        description: "The image was successfully removed from the gallery",
      });
      setIsDeleteDialogOpen(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    // In a real app, you would handle file uploads here
    toast({
      title: "Image uploaded",
      description: "Your image has been added to the gallery",
    });
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <AdminLayout title="Gallery Management">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-white">Event Gallery</h2>
        <Dialog open={isUploadOpen} onOpenChange={setIsUploadOpen}>
          <Button 
            onClick={() => setIsUploadOpen(true)}
            className="bg-indigo-600 hover:bg-indigo-700"
          >
            <ImagePlus className="mr-2 h-4 w-4" /> Upload Images
          </Button>
          <DialogContent className="bg-gray-900 border-gray-800 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-white">Upload Images</DialogTitle>
              <DialogDescription className="text-gray-400">
                Add new images to your event gallery.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div 
                className="mt-4 border-2 border-dashed border-gray-700 rounded-lg p-6 text-center"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                <div className="mx-auto flex flex-col items-center justify-center">
                  <Upload className="h-10 w-10 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-400 mb-1">Drag and drop your images here</p>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  
                  <label htmlFor="file-upload" className="mt-4">
                    <Button type="button" className="bg-indigo-600 hover:bg-indigo-700">
                      Select Files
                    </Button>
                    <input id="file-upload" type="file" multiple className="sr-only" />
                  </label>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-sm font-medium text-white mb-2">Selected Files</h4>
                <div className="text-center text-gray-500 text-sm">
                  No files selected
                </div>
              </div>
              
              <DialogFooter className="flex justify-end gap-2 pt-8">
                <Button type="button" variant="outline" className="bg-gray-800 text-gray-200 border-gray-700" onClick={() => setIsUploadOpen(false)}>
                  Cancel
                </Button>
                <Button 
                  type="button" 
                  className="bg-indigo-600 hover:bg-indigo-700"
                  onClick={() => {
                    toast({
                      title: "Images uploaded",
                      description: "Your images have been successfully uploaded to the gallery",
                    });
                    setIsUploadOpen(false);
                  }}
                >
                  Upload Files
                </Button>
              </DialogFooter>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {galleryImages.map((image, index) => (
          <Card key={index} className="overflow-hidden group relative bg-gray-900 border-gray-800 hover:border-indigo-500/30 transition-all">
            <div className="aspect-square">
              <img 
                src={`${image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="bg-gray-800/80 border-gray-700 hover:bg-gray-700"
                  onClick={() => handleViewImage(image)}
                >
                  <Eye className="h-4 w-4 text-blue-400" />
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="bg-gray-800/80 border-gray-700 hover:bg-gray-700"
                  onClick={() => handleDeletePrompt(index)}
                >
                  <Trash2 className="h-4 w-4 text-red-400" />
                </Button>
              </div>
            </div>
          </Card>
        ))}

        <Card 
          className="border-dashed border-2 border-gray-700 bg-gray-900/30 flex items-center justify-center aspect-square cursor-pointer transition-all"
          onClick={() => setIsUploadOpen(true)}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div className="text-center p-6">
            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-3">
              <Plus className="h-6 w-6 text-indigo-400" />
            </div>
            <p className="text-gray-400 text-sm">Drop images here or click to upload</p>
          </div>
        </Card>
      </div>

      {/* View Image Dialog */}
      <Dialog open={isViewImageOpen} onOpenChange={setIsViewImageOpen}>
        <DialogContent className="bg-gray-900 border-gray-800 text-white max-w-3xl max-h-[90vh] p-2">
          {currentImage && (
            <div className="relative">
              <img 
                src={`${currentImage}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`} 
                alt="Gallery image" 
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <Button 
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-gray-900/70 hover:bg-gray-800 rounded-full"
                onClick={() => setIsViewImageOpen(false)}
              >
                <X className="h-4 w-4 text-white" />
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent className="bg-gray-900 border-gray-800 text-white">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white">Delete Image</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-400">
              Are you sure you want to delete this image? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-gray-800 text-gray-200 border-gray-700">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction 
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={handleDeleteImage}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </AdminLayout>
  );
};

export default Gallery;
