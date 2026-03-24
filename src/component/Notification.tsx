import SectionHeader from "./SectionHeader";
import ToggleItem from "./ToggleItem";

const NotificationSection = () => {
  return (
    <section className="space-y-6 pt-8 pb-12">
      <SectionHeader
        title="Notifications"
        description="Choose how you want to be notified."
      />

      <div className="space-y-4">
        <ToggleItem
          title="Email Notifications"
          description="Receive updates via email."
          defaultChecked
        />

        <ToggleItem
          title="In-App Alerts"
          description="Real-time alerts."
          defaultChecked
        />

        <ToggleItem
          title="Weekly Newsletter"
          description="Tips and updates."
        />
      </div>
    </section>
  );
};

export default NotificationSection;