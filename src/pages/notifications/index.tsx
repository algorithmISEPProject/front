import React from "react";

import Like from "@/pages/notifications/components/like";
import Follow from "@/pages/notifications/components/follow";
import Friend from "@/pages/notifications/components/friend";
import Reply from "@/pages/notifications/components/reply";

function NotificationsPage() {
  return (
    <div className="w-full flex justify-center">
      <div className="space-y-5 w-4/6">
        <div>Notifications</div>
        <Like />
        <Follow />
        <Follow />
        <Like />
        <Reply />
      </div>
    </div>
  );
}

export default NotificationsPage;
