# Themed User-Facing Text Inventory

Every non-generic, Shadowrun-flavored piece of user-facing copy in the frontend.
Each entry records the original themed string, what it was changed to, and a blank
`replace with:` field for any further customization.

---

## Branding / Meta

### frontend/index.html
- L8 `meta keywords`
  previously was: `Shadowrun, Sixth World, community, voice chat, tabletop RPG`
  currently: `community, chat, voice chat, messaging`
  replace with:
- L9 `meta author`
  previously was: `Sixth World Sunday`
  currently: `Lambda`
  replace with:

### frontend/public/favicon/site.webmanifest
- L2 `name`
  previously was: `Sixth World Sunday`
  currently: `The Cursed Sparrow`
  replace with:
- L3 `short_name`
  previously was: `Sixth World`
  currently: `Cursed Sparrow`
  replace with:

### frontend/src/components/layout/Header/Header.tsx
- `aria-label`
  previously was: `Sixth World Sunday home`
  currently: `The Cursed Sparrow home`
  replace with:
- wordmark fragment
  previously was: `SIXTH WORLD `
  currently: `THE CURSED `
  replace with:
- wordmark fragment (`<b>`)
  previously was: `SUNDAY`
  currently: `SPARROW`
  replace with:
- status pill
  previously was: `node online`
  currently: `online`
  replace with:

### frontend/src/components/layout/ChannelRail/ChannelRail.tsx
- server name fragment
  previously was: `SIXTH WORLD `
  currently: `THE CURSED `
  replace with:
- server name fragment (`<b>`)
  previously was: `SUNDAY`
  currently: `SPARROW`
  replace with:
- file nav title
  previously was: `File Vault`
  currently: `Files`
  replace with:
- file nav label
  previously was: `Data Vault`
  currently: `Files`
  replace with:

---

## Auth

### frontend/src/pages/auth/LoginPage.tsx
- badge
  previously was: `NODE 6WS // SECURE`
  currently: `SECURE CONNECTION`
  replace with:
- kicker
  previously was: `Sixth World`
  currently: `The Cursed`
  replace with:
- title (single word, no span)
  previously was: `SUN<span>DAY</span>`
  currently: `SPARROW`
  replace with:
- tagline
  previously was: `Private node for the sprawl. Voice, text, streams, and the Archive — all jacked into one grid.`
  currently: `A private space for the community. Voice, text, streams, and file storage — all in one place.`
  replace with:
- telemetry label
  previously was: `> matrix_link`
  currently: `> connection`
  replace with:
- telemetry label
  previously was: `> ice_layer`
  currently: `> firewall`
  replace with:
- telemetry label
  previously was: `> awaiting handshake`
  currently: `> awaiting connection`
  replace with:
- tab title
  previously was: `New Identity`
  currently: `Create Account`
  replace with:
- tab title
  previously was: `Jack In`
  currently: `Sign In`
  replace with:
- sub (register)
  previously was: `register a handle to enter the node`
  currently: `create an account to get started`
  replace with:
- sub (sign in)
  previously was: `authenticate to enter the node`
  currently: `sign in to continue`
  replace with:
- label
  previously was: `Handle / SIN`
  currently: `Username`
  replace with:
- placeholder
  previously was: `ghost_in_the_grid`
  currently: `your_username`
  replace with:
- label
  previously was: `Passkey`
  currently: `Password`
  replace with:
- label
  previously was: `Comm Address`
  currently: `Email Address`
  replace with:
- placeholder
  previously was: `you@thegrid.net`
  currently: `you@example.com`
  replace with:
- label
  previously was: `Street Name (optional)`
  currently: `Display Name (optional)`
  replace with:
- placeholder
  previously was: `Wraith`
  currently: `Jane`
  replace with:
- placeholder
  previously was: `contact a fixer`
  currently: `enter your invite code`
  replace with:
- button
  previously was: `Jack In ▸`
  currently: `Sign In ▸`
  replace with:
- link
  previously was: `Already a runner? Jack in`
  currently: `Already have an account? Sign in`
  replace with:
- link
  previously was: `Request a SIN`
  currently: `Create an account`
  replace with:
- link
  previously was: `Lost passkey?`
  currently: `Forgot password?`
  replace with:
- notice
  previously was: `Registration is locked down.`
  currently: `Registration is closed.`
  replace with:

### frontend/src/pages/auth/ForgotPasswordPage.tsx
- badge
  previously was: `NODE 6WS // RECOVERY`
  currently: `ACCOUNT RECOVERY`
  replace with:
- sub
  previously was: `request a new passkey for your handle`
  currently: `request a new password for your account`
  replace with:
- hint
  previously was: `Enter your handle and we will transmit a reset link to the comm address on file.`
  currently: `Enter your username and we'll send a reset link to the email on file.`
  replace with:
- label
  previously was: `Handle / SIN`
  currently: `Username`
  replace with:
- placeholder
  previously was: `ghost_in_the_grid`
  currently: `your_username`
  replace with:
- button
  previously was: `Transmit Reset ▸`
  currently: `Send Reset Link ▸`
  replace with:
- hint
  previously was: `No comm address on file? You cannot self-recover. Reach out to a node admin:`
  currently: `No email on file? You can't self-recover. Reach out to a site admin:`
  replace with:
- button
  previously was: `Back to jack in`
  currently: `Back to sign in`
  replace with:

### frontend/src/pages/auth/ResetPasswordPage.tsx
- badge
  previously was: `NODE 6WS // RECOVERY`
  currently: `ACCOUNT RECOVERY`
  replace with:
- title
  previously was: `New Passkey`
  currently: `New Password`
  replace with:
- sub
  previously was: `set a new passkey for your handle`
  currently: `set a new password for your account`
  replace with:
- error
  previously was: `This reset link is corrupted or incomplete.`
  currently: `This reset link is invalid or incomplete.`
  replace with:
- success
  previously was: `Passkey rotated. You can now jack in with your new credentials.`
  currently: `Password updated. You can now sign in with your new credentials.`
  replace with:
- button
  previously was: `Go to jack in ▸`
  currently: `Go to sign in ▸`
  replace with:
- label
  previously was: `New Passkey`
  currently: `New Password`
  replace with:
- label
  previously was: `Confirm Passkey`
  currently: `Confirm Password`
  replace with:
- button
  previously was: `Rotate Passkey ▸`
  currently: `Update Password ▸`
  replace with:

### frontend/src/pages/auth/SetEmailPage.tsx
- loading status
  previously was: `syncing node`
  currently: `loading`
  replace with:
- badge
  previously was: `NODE 6WS // IDENTITY`
  currently: `ACCOUNT`
  replace with:
- title
  previously was: `Link Comm Address`
  currently: `Add Email Address`
  replace with:
- sub
  previously was: `register a recovery address for your handle`
  currently: `add a recovery email to your account`
  replace with:
- hint
  previously was: `A comm address is now required so you can recover your handle and stay jacked in. Enter one to continue; we will transmit a confirmation link to verify it.`
  currently: `An email address is now required so you can recover your account. Enter one to continue; we'll send a confirmation link to verify it.`
  replace with:
- label
  previously was: `Comm Address`
  currently: `Email Address`
  replace with:
- placeholder
  previously was: `you@thegrid.net`
  currently: `you@example.com`
  replace with:
- button
  previously was: `Link & Continue ▸`
  currently: `Save & Continue ▸`
  replace with:

### frontend/src/pages/auth/VerifyEmailPage.tsx
- badge
  previously was: `NODE 6WS // IDENTITY`
  currently: `ACCOUNT`
  replace with:
- title
  previously was: `Verify Comm Address`
  currently: `Verify Email Address`
  replace with:
- sub
  previously was: `confirming your recovery address`
  currently: `confirming your email address`
  replace with:
- status
  previously was: `verifying handshake`
  currently: `verifying`
  replace with:
- success
  previously was: `Comm address verified. Handshake complete.`
  currently: `Email address verified. All set.`
  replace with:
- button
  previously was: `Enter the Node ▸`
  currently: `Continue ▸`
  replace with:
- error
  previously was: `This verification link is corrupted or expired.`
  currently: `This verification link is invalid or expired.`
  replace with:
- button
  previously was: `Return to grid`
  currently: `Return home`
  replace with:

---

## Error / Maintenance

### frontend/src/pages/notfound/NotFoundPage.tsx
- page title
  previously was: `Node Not Found`
  currently: `Page Not Found`
  replace with:
- heading
  previously was: `This node is off the grid`
  currently: `This page doesn't exist`
  replace with:
- blurb
  previously was: `Dead address, chummer. The host you pinged doesn't answer — maybe a broken link, maybe paydata that was scrubbed, maybe ICE took it down. Jack back to the main grid and try a fresh route.`
  currently: `That page couldn't be found — maybe a broken link, or content that was removed. Head back home and try again.`
  replace with:
- button
  previously was: `Back to the Grid`
  currently: `Back Home`
  replace with:

### frontend/src/pages/maintenance/MaintenancePage.tsx
- status
  previously was: `node offline // maintenance`
  currently: `offline // maintenance`
  replace with:
- default title
  previously was: `The node is down for a hardware swap`
  currently: `We're down for maintenance`
  replace with:
- default message
  previously was: `Decker's rerouting the grid. Jack back in shortly, chummer.`
  currently: `We're making some updates. Check back shortly.`
  replace with:

---

## Profile / Settings

### frontend/src/pages/profile/ProfilePage.tsx
- loading
  previously was: `Pinging the node...`
  currently: `Loading...`
  replace with:
- empty state
  previously was: `Runner not found on this node.`
  currently: `User not found.`
  replace with:
- ban banner
  previously was: `SIN revoked // runner blacklisted`
  currently: `Account banned`
  replace with:
- blocked banner
  previously was: `This runner has blocked you.`
  currently: `This user has blocked you.`
  replace with:
- bio fallback
  previously was: `This runner has not written a bio yet.`
  currently: `This user hasn't written a bio yet.`
  replace with:

### frontend/src/pages/profile/SettingsPage.tsx
- loading
  previously was: `Decrypting dossier...`
  currently: `Loading...`
  replace with:
- subheading
  previously was: `configure your runner dossier and node preferences`
  currently: `manage your profile and preferences`
  replace with:
- section title
  previously was: `dossier`
  currently: `profile`
  replace with:
- bio placeholder
  previously was: `Drop your handle's backstory for the rest of the node...`
  currently: `Tell others a little about yourself...`
  replace with:

### frontend/src/pages/profile/DangerZoneSection.tsx
- error
  previously was: `Failed to wipe SIN.`
  currently: `Failed to delete account.`
  replace with:
- description
  previously was: `Wiping your SIN is permanent. Your dossier, transmissions, and presence on the node will be purged from the grid.`
  currently: `Deleting your account is permanent. Your profile, messages, and presence will be removed from the site.`
  replace with:
- button
  previously was: `Wipe SIN`
  currently: `Delete Account`
  replace with:
- modal title
  previously was: `Wipe SIN`
  currently: `Delete Account`
  replace with:
- confirm text
  previously was: `This action cannot be undone. Enter your passkey to confirm the wipe.`
  currently: `This action cannot be undone. Enter your password to confirm.`
  replace with:
- label
  previously was: `Passkey`
  currently: `Password`
  replace with:
- button (pending)
  previously was: `Wiping...`
  currently: `Deleting...`
  replace with:
- button
  previously was: `Wipe My SIN`
  currently: `Delete My Account`
  replace with:

### frontend/src/pages/profile/BlockedUsersSection.tsx
- section title
  previously was: `blocked runners`
  currently: `blocked users`
  replace with:
- loading
  previously was: `Scanning blocklist...`
  currently: `Loading...`
  replace with:
- empty state
  previously was: `No runners on your blocklist.`
  currently: `No users on your blocklist.`
  replace with:

### frontend/src/pages/profile/ChangePasswordSection.tsx
- error
  previously was: `New passkey must be at least 8 characters.`
  currently: `New password must be at least 8 characters.`
  replace with:
- error
  previously was: `Passkeys do not match.`
  currently: `Passwords do not match.`
  replace with:
- success
  previously was: `Passkey rotated successfully.`
  currently: `Password changed successfully.`
  replace with:
- error
  previously was: `Failed to rotate passkey.`
  currently: `Failed to change password.`
  replace with:
- section title
  previously was: `change passkey`
  currently: `change password`
  replace with:
- label
  previously was: `Current Passkey`
  currently: `Current Password`
  replace with:
- label
  previously was: `New Passkey`
  currently: `New Password`
  replace with:
- label
  previously was: `Confirm New Passkey`
  currently: `Confirm New Password`
  replace with:
- button (pending)
  previously was: `Rotating...`
  currently: `Saving...`
  replace with:
- button
  previously was: `Rotate Passkey`
  currently: `Change Password`
  replace with:

---

## Chat / Rooms

### frontend/src/pages/rooms/RoomPage.tsx
- member status header
  previously was: `jacked in`
  currently: `online`
  replace with:

### frontend/src/components/chat/MessageList/RoomMessageList.tsx
- empty state
  previously was: `No transmissions yet. Break the silence.`
  currently: `No messages yet. Start the conversation.`
  replace with:
- load more
  previously was: `Pulling older transmissions...`
  currently: `Loading older messages...`
  replace with:

### frontend/src/components/chat/ChatComposer/ChatComposer.tsx
- placeholder (desktop)
  previously was: `Transmit to channel… (Enter to send, Shift+Enter for newline)`
  currently: `Message the channel… (Enter to send, Shift+Enter for newline)`
  replace with:
- placeholder (mobile)
  previously was: `Transmit to channel…`
  currently: `Message the channel…`
  replace with:

### frontend/src/components/chat/CreateChannelModal/CreateChannelModal.tsx
- modal title
  previously was: `Spin Up Channel`
  currently: `Create Channel`
  replace with:
- name placeholder
  previously was: `e.g. sunday-run`
  currently: `e.g. general`
  replace with:

### frontend/src/components/chat/EditChannelModal/EditChannelModal.tsx
- name placeholder
  previously was: `e.g. sunday-run`
  currently: `e.g. general`
  replace with:

### frontend/src/components/chat/MessageSearchPanel/MessageSearchPanel.tsx
- panel title
  previously was: `Search transmissions`
  currently: `Search messages`
  replace with:

### frontend/src/components/ReportButton/ReportButton.tsx
- error
  previously was: `Failed to transmit flag`
  currently: `Failed to submit report`
  replace with:
- modal title
  previously was: `Flag Transmission`
  currently: `Report`
  replace with:
- success
  previously was: `Flag transmitted. A moderator will review it.`
  currently: `Report submitted. A moderator will review it.`
  replace with:
- placeholder
  previously was: `Why are you flagging this transmission?`
  currently: `Why are you reporting this?`
  replace with:
- button (pending)
  previously was: `Transmitting...`
  currently: `Submitting...`
  replace with:
- button
  previously was: `Transmit Flag`
  currently: `Submit Report`
  replace with:

---

## Search

### frontend/src/components/layout/GlobalSearch/GlobalSearch.tsx
- placeholder
  previously was: `search the grid…`
  currently: `search…`
  replace with:
- button
  previously was: `Run`
  currently: `Search`
  replace with:
- loading
  previously was: `scanning the grid…`
  currently: `searching…`
  replace with:
- empty
  previously was: `no paydata for "{query}".`
  currently: `no results for "{query}".`
  replace with:
- see-all
  previously was: `See all paydata for "{query}"`
  currently: `See all results for "{query}"`
  replace with:

### frontend/src/pages/search/SearchPage.tsx
- heading
  previously was: `Search the Grid`
  currently: `Search`
  replace with:
- query examples
  previously was: `wraith decker`, `wraith OR ghost`, `runner -decker`, `"black ice"`, `"shadow run" wraith -decker`
  currently: `alice bob`, `alice OR bob`, `member -mod`, `"exact phrase"`, `"exact phrase" word -other`
  replace with:
- info text
  previously was: `Drafts and banned-user paydata never surface in results.`
  currently: `Drafts and banned-user content never surface in results.`
  replace with:
- placeholder
  previously was: `Search the grid...`
  currently: `Search...`
  replace with:
- hint
  previously was: `Enter at least 2 characters to query the grid.`
  currently: `Enter at least 2 characters to search.`
  replace with:
- loading
  previously was: `Scanning...`
  currently: `Searching...`
  replace with:
- empty
  previously was: `No paydata found. Try different keywords or drop the filter.`
  currently: `No results found. Try different keywords or drop the filter.`
  replace with:

---

## Users

### frontend/src/pages/users/UsersPage.tsx
- loading
  previously was: `Scanning the grid...`
  currently: `Loading...`
  replace with:
- page title
  previously was: `Runners`
  currently: `Members`
  replace with:
- search placeholder
  previously was: `Search runners...`
  currently: `Search members...`
  replace with:
- section heading
  previously was: `Jacked In`
  currently: `Online`
  replace with:
- empty (online)
  previously was: `No one jacked in`
  currently: `No one online`
  replace with:
- empty (offline)
  previously was: `No offline runners`
  currently: `No offline members`
  replace with:

---

## Files

### frontend/src/pages/files/FileBrowserPage.tsx
- page title
  previously was: `Data Vault`
  currently: `Files`
  replace with:
- staff badge
  previously was: `GM access`
  currently: `staff access`
  replace with:
- subtitle
  previously was: `Locked folders are visible to GMs and staff only.`
  currently: `Locked folders are visible to staff only.`
  replace with:
- loading
  previously was: `Loading vault…`
  currently: `Loading…`
  replace with:
- lock tooltip (folders + files)
  previously was: `Locked - GM only`
  currently: `Locked - staff only`
  replace with:

---

## Roles / Notifications

### frontend/src/components/RolePill/RolePill.tsx
- super_admin label
  previously was: `Sysop`
  currently: `Owner`
  replace with:
- super_admin tooltip
  previously was: `Site owner - super administrator`
  currently: `Site owner`
  replace with:
- gm label
  previously was: `GM`
  currently: `Host`
  replace with:
- gm tooltip
  previously was: `Game Master`
  currently: `Host`
  replace with:

### frontend/src/utils/permissions.ts
- role group label
  previously was: `Sysops`
  currently: `Owners`
  replace with:
- role group label
  previously was: `Game Masters`
  currently: `Hosts`
  replace with:

### frontend/src/utils/notifications.ts
- role display name
  previously was: `Sysop`
  currently: `Owner`
  replace with:

### frontend/src/pages/notifications/NotificationsPage.tsx
- loading
  previously was: `Checking the wire...`
  currently: `Loading...`
  replace with:
- empty (no notifications)
  previously was: `The wire is quiet`
  currently: `No notifications`
  replace with:
- empty (no unread)
  previously was: `No unread signals`
  currently: `No unread notifications`
  replace with:

---

## Admin

### frontend/src/pages/admin/AdminLayout.tsx
- panel title (admin)
  previously was: `Node Control`
  currently: `Admin Panel`
  replace with:
- panel title (mod)
  previously was: `Moderator Deck`
  currently: `Mod Panel`
  replace with:

### frontend/src/pages/admin/AdminDashboard.tsx
- loading
  previously was: `Reading node telemetry...`
  currently: `Loading...`
  replace with:
- page title
  previously was: `Node Dashboard`
  currently: `Dashboard`
  replace with:
- stat label
  previously was: `Runners`
  currently: `Members`
  replace with:
- stat label
  previously was: `Transmissions`
  currently: `Messages`
  replace with:
- table column
  previously was: `New Runners`
  currently: `New Members`
  replace with:
- table column
  previously was: `New Transmissions`
  currently: `New Messages`
  replace with:
- section title
  previously was: `top runners`
  currently: `top members`
  replace with:
- activity suffix
  previously was: `{n} transmissions`
  currently: `{n} messages`
  replace with:
- empty
  previously was: `No active runners yet`
  currently: `No active members yet`
  replace with:

### frontend/src/pages/admin/AdminReports.tsx
- loading
  previously was: `Pulling flagged traffic...`
  currently: `Loading...`
  replace with:

### frontend/src/pages/admin/AdminUsers.tsx
- page title
  previously was: `Runners`
  currently: `Members`
  replace with:
- search placeholder
  previously was: `Search the grid...`
  currently: `Search members...`
  replace with:
- loading
  previously was: `Scanning the grid...`
  currently: `Loading...`
  replace with:
- empty
  previously was: `No runners found`
  currently: `No members found`
  replace with:
- table column
  previously was: `Handle`
  currently: `Username`
  replace with:
- status badge
  previously was: `Flatlined`
  currently: `Banned`
  replace with:
- status badge
  previously was: `Jacked In`
  currently: `Active`
  replace with:

### frontend/src/pages/admin/AdminUserDetail.tsx
- loading
  previously was: `Pulling runner dossier...`
  currently: `Loading...`
  replace with:
- back link
  previously was: `← Back to Runners`
  currently: `← Back to Members`
  replace with:
- page title
  previously was: `Runner Dossier`
  currently: `User Detail`
  replace with:
- email fallback
  previously was: `No comm channel`
  currently: `No email on file`
  replace with:
- status badge
  previously was: `Flatlined`
  currently: `Banned`
  replace with:
- status badge
  previously was: `Jacked In`
  currently: `Active`
  replace with:
- lock badge
  previously was: `ICE Locked`
  currently: `Locked`
  replace with:
- section title
  previously was: `passkey`
  currently: `password`
  replace with:
- modal title
  previously was: `New Passkey`
  currently: `New Password`
  replace with:
- modal body
  previously was: `Share this new passkey with <name> securely.`
  currently: `Share this new password with <name> securely.`
  replace with:
- modal label
  previously was: `Passkey`
  currently: `Password`
  replace with:

### frontend/src/pages/admin/AdminAuditLog.tsx
- loading
  previously was: `Reading the trace log...`
  currently: `Loading...`
  replace with:

### frontend/src/pages/admin/AdminContentRules.tsx
- loading
  previously was: `Loading protocols...`
  currently: `Loading...`
  replace with:

### frontend/src/pages/admin/AdminVanityRoles.tsx
- system role notice
  previously was: `This is a system role. Runners are automatically assigned based on leaderboard standing and cannot be manually changed.`
  currently: `This is a system role. Members are automatically assigned based on leaderboard standing and cannot be manually changed.`
  replace with:

### frontend/src/pages/admin/AdminSettings.tsx
- loading
  previously was: `Loading node config...`
  currently: `Loading...`
  replace with:
- page title
  previously was: `Node Config`
  currently: `Settings`
  replace with:
- maintenance title placeholder
  previously was: `Node offline for maintenance`
  currently: `Down for maintenance`
  replace with:
- maintenance message placeholder
  previously was: `The grid is down for upgrades. Jack back in shortly.`
  currently: `Down for maintenance. Check back shortly.`
  replace with:
- default site name fallback
  previously was: `Sixth World Sunday`
  currently: `The Cursed Sparrow`
  replace with:
- embed preview title
  previously was: `Sixth World Sunday - Shadowrun Community`
  currently: `The Cursed Sparrow`
  replace with:
- embed preview description
  previously was: `Welcome to the sprawl. Share runs, post art, join the conversation, and connect with the Shadowrun community.`
  currently: `A private community space. Chat, voice, streams, and file storage — all in one place.`
  replace with:
- default domain fallback
  previously was: `sixthworldsunday.net`
  currently: `cursedsparrow.lambdadelta.xyz`
  replace with:
