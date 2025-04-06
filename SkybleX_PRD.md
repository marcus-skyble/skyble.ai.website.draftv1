# Skyble X – Product Requirements Document (PRD)

## 1. Purpose
Skyble X is an Apple-focused Managed Service Provider (MSP) platform designed to simplify IT management for SMBs using Apple devices. This PRD outlines the requirements to deliver device deployment, security, support, backup, analytics, and customer self-service.

## 2. Scope
- Manage Macs, iPhones, iPads (optionally Apple TVs, Watches)
- Basic & Advanced service tiers
- Integrate with tools (Mosyle, Nexthink, Watchman, HaloPSA)
- Portal for customers and technicians
- Remote-first support model

## 3. Users
- **Internal Technician** – Skyble X engineers
- **Customer Admin** – Read-only or admin client users
- **End User** – Device users
- **Business Owner** – Executive stakeholders

## 4. Service Tiers & Packages

| Service Level | Code Name | Description | Included In |
|---------------|-----------|-------------|-------------|
| X1 - Ground Control | Essential | Core onboarding, MDM, compliance | ✅ Basic, ✅ Advanced |
| X2 - Take Off | Intermediate | Advanced policy, identity, automation | ❌ Basic, ✅ Advanced |
| X3 - Cruise | Advanced | Reporting, support, backup, recovery | ❌ Basic, ✅ Advanced |

---

## 5. Customer Lifecycle Integration

Skyble X follows a structured client journey from lead capture to long-term retention. This process aligns sales, onboarding, service delivery, and support operations.

### Lifecycle Stages & Requirements

| Stage | Description | System Touchpoints | Internal SLAs |
|-------|-------------|--------------------|----------------|
| **1. Lead Generation & Contact Registration** | Capture leads via WhatsApp, email, web, phone | CRM (e.g. HubSpot or HaloPSA CRM), WhatsApp, Forms | Lead entry within 1 hour, auto-acknowledgment |
| **2. Follow-Up & Initial Contact** | First contact, calendar link sent, interest qualified | CRM, Email, Calendly | First contact attempt within 1 business day |
| **3. Introductory Meeting & Demo** | Discovery and tailored product demo | Zoom/Meet, Demo kit, CRM | Meeting scheduled within 3 business days |
| **4. Customer Information Survey** | Data gathering for proposal (devices, IT setup) | CRM, Online form (e.g. Typeform) | Survey sent within 1 day of meeting |
| **5. Quotation & Proposal** | Custom pricing & scope proposal delivery | HaloPSA, Proposal tool | Sent within 48 hours of survey completion |
| **6. Final Interview for Implementation** | Confirm tech setup (ABM, MDM, SSO, rollout plan) | CRM, HaloPSA, Internal Checklist | Final tech review scheduled within 5 days |
| **7. Onboarding & Implementation** | Device enrollment, MDM config, user welcome | Mosyle, ABM, Email, Self-Service Portal | Enroll and apply policies within 2 business days |
| **8. Customer Support & Retention** | QBRs, usage tracking, SLA-based support | HaloPSA, Watchman, Nexthink, QBR templates | QBRs: Quarterly (Advanced); Response: <1h |

### Notes:
- Each stage includes CRM entries and next-step triggers.
- HaloPSA automation will be used for ticket creation and SLA tracking.
- Proposals and QBRs must be branded, trackable, and archived.

---

## 6. Tier Comparison Table

| Area | Feature Set | X1 - Ground Control | X2 - Take Off | X3 - Cruise |
|------|-------------|---------------------|----------------|-------------|
| Deployment & MDM | Zero-touch, ABM, compliance | ✅ | ✅ | ✅ |
| Security | Policies, Encryption, Lock & Wipe | ✅ | ✅ | ✅ |
| Device Automation | App deployment, device grouping | ✅ | ✅ | ✅ |
| Advanced Automation & Scripting | Bulk config, alerts, restrictions | ❌ | ✅ | ✅ |
| Identity & Access | SSO, Apple IDs, MFA, RBAC | ❌ | ✅ | ✅ |
| Network Policies | VPN, certificate, Wi-Fi access | ❌ | ✅ | ✅ |
| App Lifecycle | Updates, blacklisting, licensing | ❌ | ✅ | ✅ |
| Reporting & Analytics | Usage, inventory, compliance | ❌ | ❌ | ✅ |
| Support & Troubleshooting | Remote support, diagnostics | ❌ | ❌ | ✅ |
| Backup & Recovery | Cloud backup, restore, DR | ❌ | ❌ | ✅ |

---

## 6A. Value for the Business Owner

Skyble X was built to deliver an exceptional experience not only to IT teams and end users, but also to business owners and leadership teams who want clear visibility, robust security, and simplified operations.

### Core Benefits

Our services deliver different levels of value depending on the service package selected (Basic or Advanced). The following benefits highlight what's available and when:

| Business Benefit | X1 - Ground Control | X2 - Take Off | X3 - Cruise |
|------------------|---------------------|----------------|-------------|
| Zero-touch device deployment | ✅ | ✅ | ✅ |
| Apple-specialized MDM setup | ✅ | ✅ | ✅ |
| Security policy enforcement | ✅ | ✅ | ✅ |
| Device compliance reporting | ❌ | ✅ | ✅ |
| Employee experience optimization | ❌ | ✅ | ✅ |
| Remote helpdesk support | ❌ | ❌ | ✅ |
| Cloud backup & restore | ❌ | ❌ | ✅ |
| Strategic Review & Recommendations | ❌ | ❌ | ✅ |
| Usage insights and executive summaries | ❌ | ❌ | ✅ |
| Predictable flat-rate billing | ✅ | ✅ | ✅ |

### Why This Matters

- **Clear Reporting for Owners**: Receive simple, high-level reports on device health, user experience, and compliance status — especially in the Advanced tier.
- **Peace of Mind on Data**: In the Advanced tier, each Mac is encrypted, backed up, and monitored continuously — enabling quick recovery in case of loss or failure.
- **Great First Impressions for Employees**: Zero-touch deployment and self-service tools make every new hire feel like IT was ready just for them.
- **Cost Control**: No hidden charges or surprise fees — just a predictable price per user per month.
- **Aligned With Growth**: Through quarterly strategic reviews (Advanced), we help identify ways technology can reduce risk, improve performance, or enable new workflows.

---

## 7. Platform Toolstack & Integrations

Skyble X uses an integrated set of cloud tools to deliver and manage services. While tools may change, functionality must support automation, support tracking, asset visibility, and reporting.

| Tool | Function | Role Owner | Integration Notes |
|------|----------|-------------|-------------------|
| Mosyle Fuse | Apple MDM & security policy enforcement | Technical Lead | API access to fetch compliance |
| HaloPSA (or equivalent) | Ticketing, billing, SLA enforcement, contracts | Operations Lead | PSA must support recurring contracts and SLA workflows |
| Nexthink | User experience analytics | Technical Lead | Endpoint agent installed on macOS devices |
| Watchman Monitoring | Health alerting (disk, battery, etc.) | Technical Lead | Email-to-ticket integration with PSA |
| QuickBooks Online | Invoicing, accounting | Finance Lead | Must sync with PSA contract module |
| Calendly | Scheduling discovery/demo calls | Sales | Links auto-sent to qualified leads |
| Online Forms (Typeform/etc.) | Customer info survey collection | Sales/Ops | Pre-fill and auto-sync to CRM/PSA |

---

## 8. Internal Roles & Responsibilities (RACI)

| Task | Sales | Tech | Ops | Client |
|------|-------|------|-----|--------|
| Lead follow-up | R | C |  | I |
| MDM Config & Device Grouping |  | R | C | I |
| SLA Setup & Monitoring |  | C | R |  |
| QBR Preparation |  | C | R | I |
| Billing & Invoicing |  |  | R | I |
| Client Survey & Proposal | R | C | C | I |
| Device Onboarding |  | R | C | I |
| Training & Docs | C | R | C | A |

Legend: R = Responsible, A = Accountable, C = Consulted, I = Informed

---

## 9. PSA System Requirements

Even if HaloPSA is replaced in the future, any PSA platform must support:

- Contract management (monthly recurring billing)
- SLA timers per ticket type
- Email-to-ticket conversion (support@skyblex.com)
- Ticket templates by category (e.g., Onboarding, Compliance Issue, Unlock Device)
- Knowledge base module (internal use)
- Integration with QuickBooks Online
- Asset & configuration tracking
- Scheduled reports and QBR exports
- Custom user roles for Skyble staff

---

## 10. Client Onboarding SOP (Internal)

1. Confirm signed agreement and ABM access credentials
2. Create Mosyle tenant and configure customer policies
3. Group devices by location/role; assign auto-enroll profiles
4. Enroll at least 1 test device and validate policy application
5. Configure compliance, security, and self-service settings
6. Upload branding assets for self-service portal
7. Prepare user welcome email with setup instructions
8. Train customer admin (if applicable)
9. Confirm successful device deployment and policy enforcement
10. Trigger “Go Live” handoff and schedule first QBR

---

## 11. Performance Metrics & KPIs

To track service quality and growth:

### Operational KPIs
- Average ticket first-response time (< 1 hour)
- Device compliance rate (> 95%)
- Average time from signed contract to Go Live (< 10 business days)
- QBR delivery rate (100% on schedule for Advanced clients)

### Financial KPIs
- MRR (monthly recurring revenue)
- Profit per user/month
- Churn rate (goal: < 5% per year)

### Satisfaction KPIs
- CSAT score (target: 9/10 avg.)
- QBR feedback completion rate
- % of clients who expand usage after QBR (> 30%)

---

## 12. Risks & Contingency Plans

To ensure service resilience and readiness for edge cases, Skyble X defines key risks and mitigation plans:

- **Tool Integration Delays**: Fallback to manual processes (e.g., CSV exports from Mosyle, ticket creation via email). SOPs will guide manual continuity steps.
- **Client Onboarding Blockers**: If Apple Business Manager (ABM) access or Apple ID federation is delayed, internal escalation SOPs will apply. Temporary onboarding can begin via manual enrollment if approved by the client.
- **Support Overload**: If SLAs are threatened due to support demand, ticket prioritization will apply and a temporary technician or contractor may be engaged.
- **Data Loss or PSA Outage**: Weekly data exports from PSA and QuickBooks will be stored in secure internal cloud storage for recovery purposes.

---

## 13. Client Reporting & Communication

Skyble X delivers key reports and communication artifacts as part of service operations. These reports will initially be delivered via web-based formats, with future plans to provide a live dashboard for business owners.

| Report Type | Frequency | Audience | Format |
|-------------|-----------|----------|--------|
| Device Health Summary | Monthly (Advanced) | IT/Admin | PDF report (Watchman/Mosyle export) |
| Strategic Review (QBR) | Quarterly (Advanced) | Business Owner / Admin | Presentation Deck + KPI PDF |
| Usage & Trends Overview | Bi-annually | Internal + Optional Client | Internal analytics summary |
| Contract Renewal Summary | 60 days pre-renewal | Business Owner | Email + proposal document |

---

## 14. Feature Change & Prioritization Process

To evolve the product while maintaining stability, all changes will be triaged and categorized:

- **Tier 1**: Core platform changes (e.g., MDM policy revisions, client dashboard updates) → Requires review by Technical Lead and Operations
- **Tier 2**: Workflow and automation improvements (e.g., new ticket templates, improved reports) → Reviewed monthly by Ops
- **Tier 3**: Cosmetic or UX/UI changes (e.g., portal branding, visual layout) → Executed as quick wins if approved by product team

All feature requests or changes will be tracked via ClickUp and reviewed in monthly sync meetings.

---

## 15. Glossary of Terms

A brief glossary to support external readers and marketing teams:

- **ABM** – Apple Business Manager  
- **MDM** – Mobile Device Management  
- **QBR** – Quarterly Strategic Review (focused on business outcomes, not just technical stats)  
- **PSA** – Professional Services Automation (e.g., HaloPSA)  
- **CSAT** – Customer Satisfaction Score  
- **RACI** – Responsibility Assignment Matrix  
- **Go Live** – The point at which a customer is fully onboarded and active  
- **Self-Service Portal** – A branded app library provided via Mosyle for end users  
- **Advanced Tier** – The premium Skyble X service tier with full support, analytics, and automation  
- **X1/X2/X3** – Internal product codes for Ground Control, Take Off, and Cruise feature bundles

---

## 16. PRD Maintenance Guidelines

To ensure this PRD remains useful across internal teams, partners, and marketing agencies:

- Reviewed quarterly by Operations and Technical Lead
- All changes to platform tools or service packages must be reflected within 7 business days
- Version number and changelog to be maintained in GitHub, Notion, or Docs
- This document is approved for use with internal teams, new hires, and external partners (e.g., marketing agencies)

---

## 17. Buyer Personas

Understanding the key decision-makers and users helps ensure our messaging and service design meet their needs.

| Persona | Role | Needs | What Skyble X Delivers |
|--------|------|-------|------------------------|
| **Business Owner** | CEO / Managing Director | Predictability, data security, visibility, vendor trust | Reports, strategic reviews, data protection, flat pricing |
| **IT Manager / Admin** | Internal IT or outsourced coordinator | Automation, compliance, support escalation | MDM setup, Mosyle config, PSA workflows, remote helpdesk |
| **End User** | Employee using a Mac/iPhone/iPad | Easy setup, minimal downtime, app access | Zero-touch onboarding, Nexthink monitoring, Self-Service portal |
