'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

type LoginValues = z.infer<typeof loginSchema>;

const Login = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: LoginValues) => {
    setIsLoading(true);
    
    // Simple admin authentication - in a real app, this would be on the server
    if (values.email === "shaz80170@gmail.com" && values.password === "871459") {
      // Set admin status in localStorage
      localStorage.setItem("isAdmin", "true");
      toast.success("Login successful");
      router.push("/admin/dashboard");
    } else {
      toast.error("Invalid credentials");
    }
    
    setIsLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto glass-card p-8">
              <div className="text-center mb-8">
                <h1 className="font-display text-3xl font-bold mb-2">Admin Login</h1>
                <p className="text-foreground/70">Enter your credentials to access the admin panel</p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="Enter your password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={isLoading}
                  >
                    {isLoading ? "Logging in..." : "Login"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Login;
