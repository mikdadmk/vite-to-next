
import { useParams, useLocation } from "react-router-dom";
import AdminLayout from "@/components/AdminLayout";
import EventDetailsView from "@/components/EventDetailsView";

const AdminEventDetail = () => {
  const { eventId } = useParams();
  const location = useLocation();
  const isEditMode = location.pathname.includes('/edit');
  
  return (
    <AdminLayout title={eventId ? (isEditMode ? "Edit Event" : "Event Details") : "Create Event"}>
      <EventDetailsView eventId={eventId} isEditMode={isEditMode} />
    </AdminLayout>
  );
};

export default AdminEventDetail;
