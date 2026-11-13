# Real Estate Seller Inventory & WhatsApp Outreach — Project Baseline

**Status:** Discovery / MVP baseline  
**Owner:** TechSensei  
**Date:** 14 November 2026  
**Working name:** PropertyPulse (provisional)

## 1. Problem and outcome

Create a seller inventory platform that imports an existing real-estate owner/property database, segments records, sends compliant personalised WhatsApp outreach, captures owner intent, and turns positive responses into a searchable, actionable inventory pipeline.

The first release is an internal tool for the manager/team. It must not send messages automatically until the business has approved the provider, WhatsApp number, templates, contact permissions, and spend limits.

## 2. MVP workflow

1. Import CSV/XLSX seller records; validate and deduplicate phone numbers and property identifiers.
2. Store property and owner records separately; support multiple properties per owner.
3. Filter eligible contacts by project, location, property type, unit, owner status, consent and suppression status.
4. Preview personalised message content for a sample before a campaign.
5. Send approved WhatsApp template messages through the official WhatsApp Business Platform.
6. Capture button/reply response: Interested in selling, Interested in renting, Not interested, Contact later, or Ask for details.
7. Update the CRM status, timestamp, campaign, message delivery/read status and follow-up owner.
8. Provide campaign and inventory dashboards with export and audit history.

## 3. Example outreach

Hello {{owner_name}}, we are checking availability for your property {{unit_number}} at {{project_name}}, {{location}}. Are you currently considering selling or renting this property?

Suggested quick-reply actions:
- Interested in selling
- Interested in renting
- Not interested
- Contact me later

Use an approved WhatsApp template. Do not imply that the recipient has already made an enquiry if they have not. Include clear business identity and a simple opt-out route (for example, STOP).

**UX note:** WhatsApp chat does not provide a general-purpose dropdown control. Use approved template quick-reply buttons where supported, or ask the user to reply with a numbered/text response. A richer dropdown can exist in the internal web dashboard, not inside WhatsApp.

## 4. Proposed technical baseline

Keep this as a separate application/module from the learning website runtime.

- **Frontend:** Next.js / React admin console, responsive.
- **Backend:** Next.js server routes initially, or a small Node.js service if campaign processing grows.
- **Database/auth:** Supabase Postgres + Auth; enforce Row Level Security. Keep service-role secrets server-side only.
- **Messaging:** Meta WhatsApp Cloud API directly for maximum control, or an approved Business Solution Provider (BSP) for onboarding, inbox, templates and support.
- **Background processing:** queue-backed campaign batches, retries with backoff, rate limits, idempotency keys and dead-letter handling.
- **Hosting:** Vercel for frontend; backend/worker on a suitable serverless or managed worker platform. Do not run bulk sends in a browser request.
- **Observability:** structured audit events, provider webhook logs, delivery/error metrics and campaign reconciliation.

### Core entities

- owners: owner_id, name, phone_e164, consent_status, consent_source, consent_at, opt_out_at
- properties: property_id, owner_id, project, unit, address, property_type, bedrooms, status, asking_price, rent_expectation, notes
- campaigns: campaign_id, name, segment_definition, template_name, scheduled_at, created_by, status, approved_by
- message_events: provider_message_id, campaign_id, owner_id, property_id, template, status, sent_at, delivered_at, read_at, error_code
- responses: response_id, owner_id, property_id, campaign_id, intent, raw_reply, received_at, follow_up_due_at, assigned_to
- suppression_list: phone_e164, reason, created_at

## 5. Compliance and platform guardrails

- Use the official WhatsApp Business Platform / Cloud API or an authorised BSP; do not automate personal WhatsApp Web or use unofficial bulk-sender tools.
- Obtain and record appropriate permission/consent for WhatsApp outreach. Verify the source and permitted purpose of the existing seller database before importing it.
- Use approved message templates for business-initiated messages outside the customer-service window.
- Honour opt-outs immediately; maintain a suppression list and never re-add opted-out numbers through later imports.
- Provide clear sender identity, keep frequency controlled, and monitor quality rating, blocks and complaints.
- Apply India's Digital Personal Data Protection Act and applicable rules, plus telecom/marketing requirements as advised by the business/legal team. Confirm lawful basis, notice, retention, access controls and deletion workflow before production.
- Restrict access by role; encrypt secrets; avoid putting phone numbers or personal data in logs, Git, analytics, or AI prompts unless strictly necessary and approved.

## 6. WhatsApp interaction and integration options

**Option A — Meta Cloud API direct**
- Pros: direct platform integration, control over data model and workflow, no BSP software layer.
- Work: Meta Business Portfolio, business verification as required, WhatsApp Business Account, phone number, app, access token/system user, webhook endpoint, approved templates, payment method and production permissions.
- Best when engineering team can own onboarding, templates, webhooks and support.

**Option B — BSP / platform**
Shortlist for a commercial evaluation (not an endorsement): Interakt, AiSensy, WATI, Gupshup and Twilio. Compare onboarding eligibility, Indian number support, template management, interactive buttons, API/webhooks, shared team inbox, exports, data processing terms, support SLA, lock-in and all-in pricing. Get written quotes before choosing.

**Voice calls:** Not required for the MVP. Start with WhatsApp text + buttons and a human follow-up queue. Evaluate WhatsApp Business Calling or a compliant telephony provider only if the manager confirms a calling requirement; this has separate onboarding, availability and pricing.

## 7. Indicative Meta messaging cost — India

Rates checked against current 2026 published reporting of Meta's India rate card, effective 1 October 2026; confirm in Meta's live rate card and provider quote before payment. Rates below are per delivered message and before GST/provider fees:

| Category | Indicative rate | Example |
|---|---:|---|
| Marketing template | ₹0.8631 | Initial seller outreach / promotional or prospecting campaign |
| Utility template | ₹0.1150 | Transactional update tied to a user-initiated interaction |
| Authentication | ₹0.1150 | OTP |
| Service replies | First 1,000 per number/month free, then ₹0.1150 | Free-form service conversation replies |

For this seller-prospecting campaign, budget the initial outbound message as **marketing**, not utility. Do not misclassify it to reduce cost. Provider platform subscription, markup, onboarding, number charges and GST are additional and vary by vendor.

### Meta-only illustration (marketing, before GST/provider charges)

| Delivered outbound messages | Approx. Meta charge |
|---:|---:|
| 500 | ₹431.55 |
| 1,000 | ₹863.10 |
| 5,000 | ₹4,315.50 |
| 10,000 | ₹8,631.00 |

A reply-button response does not remove the cost of the outbound marketing template. The actual total depends on delivery, message category, provider fee, applicable tax and any follow-up templates.

## 8. Cost approval checklist — no purchases made

Request written quotes for:
1. Meta Cloud API direct vs one BSP (monthly platform fee, per-message markup, onboarding and support).
2. WhatsApp number / migration implications and display-name approval.
3. Hosting and database (free-tier feasibility, production estimate and backups).
4. Email/domain only if needed for operational notifications.
5. Optional human calling/telephony only after scope confirmation.

No subscription, top-up, paid API usage, domain, hosting upgrade or third-party token purchase is authorised by this baseline.

## 9. Delivery plan

**Phase 0 — Discovery (before coding)**
- Confirm database format, record count, source and consent history.
- Confirm country mix, target campaign volume, team users and manager's success criteria.
- Select direct Cloud API or BSP after written pricing/security review.
- Approve exact copy, template category, opt-out wording and sender identity.

**Phase 1 — MVP**
- Authentication and role-based admin access.
- CSV import, validation, deduplication and owner/property management.
- Segment builder and campaign preview.
- Template send integration in test mode / small approved pilot.
- Webhook receiver and response mapping.
- Opt-out/suppression, audit log and campaign dashboard.

**Phase 2 — Operational hardening**
- Queue, retries, throttling, scheduling, idempotency and monitoring.
- Assignment, reminders, notes, exports and reporting.
- Security review, privacy notice, retention/deletion and backup/restore test.

**Phase 3 — Optional enhancements**
- AI-assisted reply classification with human review.
- CRM integration, voice follow-up, multilingual templates and advanced analytics.

## 10. Acceptance criteria for first pilot

- No message can be sent to a contact marked opted-out or not approved for outreach.
- Campaign preview accurately resolves owner and property fields.
- Only approved templates and configured sender number can be used.
- Every send attempt and webhook event is traceable.
- Button/reply responses map to the correct owner, property and campaign.
- Duplicate imports and webhook retries do not create duplicate sends or responses.
- Campaign can be paused and resumed safely.
- Spend estimate and actual delivered-message count are visible.

## 11. Decisions required from manager

1. Is the seller database permissioned for WhatsApp outreach, and what is the consent evidence?
2. Approximate contact count and expected monthly campaign volume?
3. Is the initial target India-only (+91), or multiple countries?
4. Should the team use its existing WhatsApp Business number or a new dedicated number?
5. Does the manager require a shared agent inbox, or is the inventory dashboard plus human follow-up enough?
6. Confirm the desired meaning of the requested “baseline with a Warshall” phrase; this document currently treats it as a workflow/baseline plan.

**Current status:** Planning baseline only. No messages have been sent, no provider has been selected, no paid services have been purchased, and no API credentials/tokens have been created or stored.
