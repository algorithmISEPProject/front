import React, { useState } from "react";
import Image from "next/image";

import settingsIconWhite from "@/assets/settingsWhiteGrayIcon.svg";
import settingsIcon from "@/assets/settingsIcon.svg";
import downArrow from "@/assets/downArrow.svg";
import upWhiteArrow from "@/assets/upWhiteArrow.svg";
import resetPasswordGray from "@/assets/resetPasswordGray.svg";
import deactivateAccountIcon from "@/assets/deactivateAccountIcon.svg";
import userIcon from "@/assets/userIcon.svg";
import privacySafetyIcon from "@/assets/privacySafetyGray.svg";
import notificationSettingsIcon from "@/assets/notificationSettingsIcon.svg";
import accessibilityIcon from "@/assets/accessibility.svg";
import ressourcesIcon from "@/assets/ressourcesIcon.svg";
import helpCenterIcon from "@/assets/helpCenterIcon.svg";

import NavLinkComp from "@/components/navLinkComp";
import { cpSync } from "fs";
import AccountInformation from "@/pages/settings/components/accountSettings/accountInformation";
import ChangePassword from "@/pages/settings/components/accountSettings/changePassword";
import DeactivateAccount from "@/pages/settings/components/accountSettings/deactivateAccount";
import PrivacyAndSafety from "@/pages/settings/components/privacyControl/privacyAndSafety";
import NotificationsSettings from "@/pages/settings/components/privacyControl/notificationsSettings";
import Accessibility from "@/pages/settings/components/privacyControl/accessibility";
import AdditionalRessources from "@/pages/settings/components/privacyControl/additionalRessources";
import HelpCenter from "@/pages/settings/components/privacyControl/helpCenter";

export default function SettingsModal() {
  const [accountSettingsActive, setAccountSettingsActive] = useState(true);
  const [privacyControlActive, setPrivacyControlActive] = useState(false);
  const [accountSettingsActiveMenu, setAccountSettingsActiveMenu] =
    useState("");
  const [privacyControlActiveMenu, setPrivacyControlActiveMenu] = useState("");

  const renderActiveMenuContent = () => {
    switch (accountSettingsActiveMenu) {
      case "accountInformation":
        return <AccountInformation />;
      case "resetPassword":
        return <ChangePassword />;
      case "deactivateAccount":
        return <DeactivateAccount />;
      case "privacyAndSafety":
        return <PrivacyAndSafety />;
      case "notifications":
        return <NotificationsSettings />;
      case "accessibility":
        return <Accessibility />;
      case "additionalRessources":
        return <AdditionalRessources />;
      case "helpCenter":
        return <HelpCenter />;
    }
  };
  return (
    <div className="h-screen flex space-x-4">
      <div className="bg-componentBackground w-full space-y-6 h-4/6 rounded-xl border-1 p-5 border-componentOutline">
        <div className="flex space-x-2">
          <Image
            alt="settingsWhiteIcon"
            src={settingsIconWhite}
            width={20}
            height={20}
          />
          <div className="text-subTitle">Settings</div>
        </div>
        {accountSettingsActive ? (
          <div>
            <button
              className="flex items-center w-full pb-4  text-white"
              onClick={() => setAccountSettingsActive(!accountSettingsActive)}
            >
              <div className="flex w-full space-x-4">
                <Image alt="userIcon" src={userIcon} width={16} height={16} />
                <div className="">Account Settings</div>
              </div>

              <Image
                alt="upWhiteArrow"
                src={upWhiteArrow}
                width={13}
                height={13}
              />
            </button>
            <div className="text-subtileText">
              <button
                className="flex flex-row space-x-4 w-full items-center rounded-lg px-4 py-3 hover:bg-btn-background hover:text-white transition-all"
                onClick={() =>
                  setAccountSettingsActiveMenu("accountInformation")
                }
              >
                <Image alt="userIcon" src={userIcon} height={20} width={20} />
                <div>Account Information</div>
              </button>
              <button
                className="flex flex-row space-x-4 w-full items-center rounded-lg px-4 py-3 hover:bg-btn-background hover:text-white transition-all
              "
                onClick={() => setAccountSettingsActiveMenu("resetPassword")}
              >
                <Image
                  alt="userIcon"
                  src={resetPasswordGray}
                  height={20}
                  width={20}
                />
                <div>Reset Password</div>
              </button>
              <button
                className="flex flex-row space-x-4 w-full items-center rounded-lg px-4 py-3 hover:bg-btn-background hover:text-white transition-all"
                onClick={() =>
                  setAccountSettingsActiveMenu("deactivateAccount")
                }
              >
                <Image
                  alt="userIcon"
                  src={deactivateAccountIcon}
                  height={20}
                  width={20}
                />
                <div>Deactivate Account</div>
              </button>
            </div>
          </div>
        ) : (
          <button
            className="flex  items-center w-full border-b pb-4 border-subtileText"
            onClick={() => setAccountSettingsActive(!accountSettingsActive)}
          >
            <div className="flex w-full space-x-4">
              <Image alt="userIcon" src={userIcon} width={16} height={16} />
              <div className="text-subtileText">Account Settings</div>
            </div>
            <Image alt="downArrow" src={downArrow} width={13} height={13} />
          </button>
        )}

        {privacyControlActive ? (
          <div>
            <button
              className="flex items-center w-full pb-4  text-white"
              onClick={() => setPrivacyControlActive(!privacyControlActive)}
            >
              <div className="flex w-full space-x-4">
                <Image
                  alt="userIcon"
                  src={settingsIcon}
                  width={16}
                  height={16}
                />
                <div className="">Privacy Control</div>
              </div>

              <Image
                alt="upWhiteArrow"
                src={upWhiteArrow}
                width={13}
                height={13}
              />
            </button>
            <div className="text-subtileText">
              <button
                className="flex flex-row space-x-4 w-full items-center rounded-lg px-4 py-3 hover:bg-btn-background hover:text-white transition-all"
                onClick={() => setAccountSettingsActiveMenu("privacyAndSafety")}
              >
                <Image
                  alt="userIcon"
                  src={privacySafetyIcon}
                  height={20}
                  width={20}
                />
                <div>Privacy And Safety</div>
              </button>
              <button
                className="flex flex-row space-x-4 w-full items-center rounded-lg px-4 py-3 hover:bg-btn-background hover:text-white transition-all
              "
                onClick={() => setAccountSettingsActiveMenu("notifications")}
              >
                <Image
                  alt="userIcon"
                  src={notificationSettingsIcon}
                  height={20}
                  width={20}
                />
                <div>Notifications</div>
              </button>
              <button
                className="flex flex-row space-x-4 w-full items-center rounded-lg px-4 py-3 hover:bg-btn-background hover:text-white transition-all"
                onClick={() => setAccountSettingsActiveMenu("accessibility")}
              >
                <Image
                  alt="accessibilityIcon"
                  src={accessibilityIcon}
                  height={20}
                  width={20}
                />
                <div>Accessibility</div>
              </button>
              <button
                className="flex flex-row space-x-4 w-full items-center rounded-lg px-4 py-3 hover:bg-btn-background hover:text-white transition-all"
                onClick={() => setAccountSettingsActiveMenu("accessibility")}
              >
                <Image
                  alt="ressourcesIcon"
                  src={ressourcesIcon}
                  height={20}
                  width={20}
                />
                <div>Additional ressources</div>
              </button>
              <button
                className="flex flex-row space-x-4 w-full items-center rounded-lg px-4 py-3 hover:bg-btn-background hover:text-white transition-all"
                onClick={() => setAccountSettingsActiveMenu("accessibility")}
              >
                <Image
                  alt="helpCenterIcon"
                  src={helpCenterIcon}
                  height={20}
                  width={20}
                />
                <div>Help center</div>
              </button>
            </div>
          </div>
        ) : (
          <button
            className="flex  items-center w-full border-b pb-4 border-subtileText"
            onClick={() => setPrivacyControlActive(!privacyControlActive)}
          >
            <div className="flex w-full space-x-4">
              <Image alt="userIcon" src={settingsIcon} width={16} height={16} />
              <div className="text-subtileText">Privacy Control</div>
            </div>
            <Image alt="downArrow" src={downArrow} width={13} height={13} />
          </button>
        )}
      </div>

      <div className="w-full">{renderActiveMenuContent()}</div>
    </div>
  );
}
