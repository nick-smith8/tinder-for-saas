"use client";
import React, { useState } from "react";
import confetti from "canvas-confetti";

const initialSuppliers = [
  { name: "Salesforce", logo: "https://logo.clearbit.com/salesforce.com" },
  { name: "Zoom", logo: "https://logo.clearbit.com/zoom.us" },
  { name: "Datadog", logo: "https://logo.clearbit.com/datadoghq.com" },
  { name: "Tropic", logo: "https://logo.clearbit.com/tropicapp.io" },
  { name: "Okta", logo: "https://logo.clearbit.com/okta.com" },
  { name: "ZoomInfo", logo: "https://logo.clearbit.com/zoominfo.com" },
  { name: "Zendesk", logo: "https://logo.clearbit.com/zendesk.com" },
  { name: "Zapier", logo: "https://logo.clearbit.com/zapier.com" },
  { name: "Workday", logo: "https://logo.clearbit.com/workday.com" },
  { name: "Vanta", logo: "https://logo.clearbit.com/vanta.com" },
  { name: "UserTesting", logo: "https://logo.clearbit.com/usertesting.com" },
  { name: "Twilio SendGrid", logo: "https://logo.clearbit.com/sendgrid.com" },
  { name: "Twilio", logo: "https://logo.clearbit.com/twilio.com" },
  {
    name: "Thomson Reuters",
    logo: "https://logo.clearbit.com/thomsonreuters.com",
  },
  { name: "Tableau", logo: "https://logo.clearbit.com/tableau.com" },
  { name: "SurveyMonkey", logo: "https://logo.clearbit.com/surveymonkey.com" },
  { name: "Stripe", logo: "https://logo.clearbit.com/stripe.com" },
  { name: "Sprout Social", logo: "https://logo.clearbit.com/sproutsocial.com" },
  { name: "Snyk", logo: "https://logo.clearbit.com/snyk.io" },
  { name: "Snowflake", logo: "https://logo.clearbit.com/snowflake.com" },
  { name: "Smartsheet", logo: "https://logo.clearbit.com/smartsheet.com" },
  { name: "Slack", logo: "https://logo.clearbit.com/slack.com" },
  { name: "SHI", logo: "https://logo.clearbit.com/shi.com" },
  { name: "Sentry", logo: "https://logo.clearbit.com/sentry.io" },
  { name: "Segment", logo: "https://logo.clearbit.com/segment.com" },
  { name: "Salesloft", logo: "https://logo.clearbit.com/salesloft.com" },
  { name: "Sage Intacct", logo: "https://logo.clearbit.com/sage.com" },
  { name: "Rippling", logo: "https://logo.clearbit.com/rippling.com" },
  { name: "Qualtrics", logo: "https://logo.clearbit.com/qualtrics.com" },
  { name: "productboard", logo: "https://logo.clearbit.com/productboard.com" },
  { name: "Postman", logo: "https://logo.clearbit.com/postman.com" },
  { name: "Pendo", logo: "https://logo.clearbit.com/pendo.io" },
  { name: "PagerDuty", logo: "https://logo.clearbit.com/pagerduty.com" },
  { name: "Outreach", logo: "https://logo.clearbit.com/outreach.io" },
  { name: "Oracle", logo: "https://logo.clearbit.com/oracle.com" },
  { name: "OneTrust", logo: "https://logo.clearbit.com/onetrust.com" },
  { name: "Notion", logo: "https://logo.clearbit.com/notion.so" },
  { name: "New Relic", logo: "https://logo.clearbit.com/newrelic.com" },
  { name: "NetSuite", logo: "https://logo.clearbit.com/netsuite.com" },
  { name: "Monday.com", logo: "https://logo.clearbit.com/monday.com" },
  { name: "Miro", logo: "https://logo.clearbit.com/miro.com" },
  { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
  { name: "Marketo", logo: "https://logo.clearbit.com/marketo.com" },
  { name: "Lucidchart", logo: "https://logo.clearbit.com/lucid.co" },
  { name: "Loom", logo: "https://logo.clearbit.com/loom.com" },
  { name: "Looker", logo: "https://logo.clearbit.com/looker.com" },
  {
    name: "LinkedIn Sales Navigator",
    logo: "https://logo.clearbit.com/salesnavigator.org",
  },
  {
    name: "LinkedIn Recruiter",
    logo: "https://logo.clearbit.com/linkedin.com",
  },
  { name: "LinkedIn", logo: "https://logo.clearbit.com/linkedin.com" },
  { name: "Lever", logo: "https://logo.clearbit.com/lever.co" },
  { name: "LeanData", logo: "https://logo.clearbit.com/leandata.com" },
  { name: "LaunchDarkly", logo: "https://logo.clearbit.com/launchdarkly.com" },
  { name: "Lattice", logo: "https://logo.clearbit.com/lattice.com" },
  { name: "KnowBe4", logo: "https://logo.clearbit.com/knowbe4.com" },
  { name: "Kandji", logo: "https://logo.clearbit.com/kandji.io" },
  { name: "JFrog", logo: "https://logo.clearbit.com/jfrog.com" },
  { name: "JetBrains", logo: "https://logo.clearbit.com/jetbrains.com" },
  { name: "JAMF", logo: "https://logo.clearbit.com/jamf.com" },
  { name: "Ironclad", logo: "https://logo.clearbit.com/ironcladapp.com" },
  { name: "Intercom", logo: "https://logo.clearbit.com/intercom.com" },
  { name: "HubSpot", logo: "https://logo.clearbit.com/hubspot.com" },
  { name: "Greenhouse", logo: "https://logo.clearbit.com/greenhouse.com" },
  { name: "Grammarly", logo: "https://logo.clearbit.com/grammarly.com" },
  { name: "Google Workspace", logo: "https://logo.clearbit.com/google.com" },
  { name: "Google Cloud", logo: "https://logo.clearbit.com/google.com" },
  { name: "Gong", logo: "https://logo.clearbit.com/gong.io" },
  { name: "GitLab", logo: "https://logo.clearbit.com/gitlab.com" },
  { name: "GitHub", logo: "https://logo.clearbit.com/github.com" },
  { name: "Gem", logo: "https://logo.clearbit.com/gem.com" },
  { name: "G2", logo: "https://logo.clearbit.com/g2.com" },
  { name: "FullStory", logo: "https://logo.clearbit.com/fullstory.com" },
  { name: "FloQast", logo: "https://logo.clearbit.com/floqast.com" },
  { name: "Fivetran", logo: "https://logo.clearbit.com/fivetran.com" },
  { name: "Figma", logo: "https://logo.clearbit.com/figma.com" },
  { name: "Dropbox", logo: "https://logo.clearbit.com/dropbox.com" },
  { name: "DocuSign", logo: "https://logo.clearbit.com/docusign.com" },
  { name: "Docker", logo: "https://logo.clearbit.com/docker.com" },
  { name: "Culture Amp", logo: "https://logo.clearbit.com/cultureamp.com" },
  { name: "CrowdStrike", logo: "https://logo.clearbit.com/crowdstrike.com" },
  { name: "Cloudflare", logo: "https://logo.clearbit.com/cloudflare.com" },
  { name: "CircleCI", logo: "https://logo.clearbit.com/circleci.com" },
  { name: "Chili Piper", logo: "https://logo.clearbit.com/chilipiper.com" },
  { name: "CDW", logo: "https://logo.clearbit.com/cdw.com" },
  { name: "Carta", logo: "https://logo.clearbit.com/carta.com" },
  { name: "Canva", logo: "https://logo.clearbit.com/canva.com" },
  { name: "Calendly", logo: "https://logo.clearbit.com/calendly.com" },
  { name: "Built In", logo: "https://logo.clearbit.com/builtin.com" },
  { name: "BrowserStack", logo: "https://logo.clearbit.com/browserstack.com" },
  { name: "Box", logo: "https://logo.clearbit.com/box.com" },
  { name: "Bill.com", logo: "https://logo.clearbit.com/bill.com" },
  { name: "Avalara", logo: "https://logo.clearbit.com/avalara.com" },
  { name: "Auth0", logo: "https://logo.clearbit.com/auth0.com" },
  { name: "Atlassian", logo: "https://logo.clearbit.com/atlassian.com" },
  { name: "Asana", logo: "https://logo.clearbit.com/asana.com" },
  { name: "Amplitude", logo: "https://logo.clearbit.com/amplitude.com" },
  { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
  { name: "ADP", logo: "https://logo.clearbit.com/adp.com" },
  { name: "Adobe", logo: "https://logo.clearbit.com/adobe.com" },
  { name: "6Sense", logo: "https://logo.clearbit.com/6sense.com" },
  { name: "1Password", logo: "https://logo.clearbit.com/1password.com" },
];
function Card({ supplier }) {
  return (
    <div className="block w-[300px] p-6 cursor-pointer bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="flex flex-col justify-center items-center">
        <p>{supplier.name}</p>
        <img
          src={supplier.logo}
          className="rounded-lg"
          alt={`${supplier.name} logo`}
        />
      </div>
    </div>
  );
}
const showToast = (supplierName, side) => {
  // Create a toast element
  const toast = document.createElement("div");
  toast.classList.add("toast");
  const statements = {
    left: [
      "Swiped left? Maybe they were too cloud-nine for your taste!",
      "Not feeling the spark? It's not you, it's their API.",
      "Swiped left? They must've not had the right features!",
      "Not a match, huh? There's plenty of SaaS in the sea!",
    ],
    right: [
      "Bingo! This vendor's got the code to your heart.",
      "Swiped right? Prepare for a lifetime of updates and integrations!",
      "Swiped right? Looks like it's a match made in cloud heaven!",
      "A perfect match! Get ready for some seamless integration.",
    ],
  };

  const randomIndex = Math.floor(Math.random() * statements[side].length);
  toast.textContent = statements[side][randomIndex];
  toast.style.position = "absolute";
  toast.style.top = "5vh";
  toast.style.left = "80vh";
  toast.style.padding = "3px";
  toast.style.backgroundColor =
    side === "left" ? "rgb(252 165 165)" : "rgb(187 247 208)";
  toast.style.borderRadius = "10px";
  // Append toast to the body to float over content
  document.body.appendChild(toast);

  // Remove toast after 3 seconds
  setTimeout(() => {
    document.body.removeChild(toast);
  }, 3000);
};
const showModal = (supplierName) => {
  const modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "50%";
  modal.style.left = "50%";
  modal.style.transform = "translate(-50%, -50%)";
  modal.style.width = "500px";
  modal.style.height = "300px";
  modal.style.padding = "20px";
  modal.style.backgroundColor = "white";
  modal.style.border = "1px solid black";
  modal.style.zIndex = "1000";

  const modalContent = document.createElement("div");
  modalContent.innerHTML = `Congrats, it's a match! <br> <br> ${supplierName} is ready to click with your stack!`;
  modalContent.style.fontFamily = "'Arial', sans-serif";
  modalContent.style.fontSize = "24px";
  modalContent.style.textAlign = "center";

  modal.appendChild(modalContent);
  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.style.position = "absolute";
  closeButton.style.bottom = "10px";
  closeButton.style.left = "20%";
  closeButton.style.transform = "translateX(-50%)";
  closeButton.style.padding = "10px 20px";
  closeButton.style.fontSize = "16px";
  closeButton.style.color = "white";
  closeButton.style.backgroundColor = "#4B5563"; // Gray-700
  closeButton.style.border = "none";
  closeButton.style.borderRadius = "5px";
  closeButton.style.cursor = "pointer";
  closeButton.onclick = () => document.body.removeChild(modal);
  modal.appendChild(closeButton);

  const infoButton = document.createElement("button");
  infoButton.textContent = "See more data about this vendor!";
  infoButton.style.position = "absolute";
  infoButton.style.bottom = "10px";
  infoButton.style.left = "70%";
  infoButton.style.transform = "translateX(-50%)";
  infoButton.style.padding = "10px 20px";
  infoButton.style.fontSize = "16px";
  infoButton.style.color = "white";
  infoButton.style.backgroundColor = "#ec61b2";
  infoButton.style.border = "none";
  infoButton.style.borderRadius = "5px";
  infoButton.style.cursor = "pointer";
  infoButton.onclick = () =>
    (window.location.href = "https://nick-smith8.github.io/rickroll/");
  modal.appendChild(infoButton);

  document.body.appendChild(modal);
};

export default function Home() {
  const [suppliers, setSuppliers] = useState(initialSuppliers);
  const [rightDrops, setRightDrops] = useState(0);

  const handleDragStart = (e, supplier) => {
    e.dataTransfer.setData("text/plain", supplier.name);
  };

  const handleDrop = (e, side) => {
    const supplierName = e.dataTransfer.getData("text");
    if (side === "right") {
      setRightDrops(rightDrops + 1);

      if (rightDrops % 2 === 0) {
        console.log("hello world", supplierName, "oh no");
        showModal(supplierName);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } else {
        showToast(supplierName, side);
      }
    } else {
      showToast(supplierName, side);
    }

    e.target.style.backgroundColor = "";
    setSuppliers(
      suppliers.filter((supplier) => supplier.name !== supplierName)
    );
  };

  const allowDrop = (e, side) => {
    e.target.style.backgroundColor =
      side === "left" ? "rgb(220 38 38)" : "rgb(22 163 74)";
    e.preventDefault();
  };

  return (
    <main className="flex h-screen">
      <div
        className="flex-1 flex bg-red-300 justify-center items-center text-2xl font-serif text-gray-800"
        onDrop={(e) => handleDrop(e, "left")}
        onDragOver={(e) => allowDrop(e, "left")}
        onDragLeave={(e) => (e.target.style.backgroundColor = "")}
      >
        404: Compatibility Not Found
      </div>
      <div className="flex-1 flex flex-col gap-4 items-center overflow-auto h-full ">
        <p className="text-2xl font-serif text-gray-800 mt-5">
          Hello Tropic! 👋 Let's find a match together
        </p>
        {suppliers.map((supplier, index) => (
          <div
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, supplier)}
          >
            <Card supplier={supplier} />
          </div>
        ))}
      </div>
      <div
        className="flex-1 flex bg-green-200 justify-center items-center text-2xl font-serif text-gray-800"
        onDrop={(e) => handleDrop(e, "right")}
        onDragOver={(e) => allowDrop(e, "right")}
        onDragLeave={(e) => (e.target.style.backgroundColor = "")}
      >
        Cloud crush? Swipe right!
      </div>
    </main>
  );
}
