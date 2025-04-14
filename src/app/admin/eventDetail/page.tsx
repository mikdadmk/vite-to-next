// app/admin/events/[eventId]/page.tsx OR [eventId]/edit/page.tsx
"use client";

import { useParams, usePathname } from "next/navigation";
import AdminLayout from "@/components/AdminLayout";
import EventDetailsView from "@/components/EventDetailsView";

const AdminEventDetailPage = () => {
  const params = useParams();
  const pathname = usePathname();

  const eventId = params?.eventId as string;
  const isEditMode = pathname.includes("/edit");

  return (
    <AdminLayout title={eventId ? (isEditMode ? "Edit Event" : "Event Details") : "Create Event"}>
      <EventDetailsView eventId={eventId} isEditMode={isEditMode} />
    </AdminLayout>
  );
};

export default AdminEventDetailPage;
