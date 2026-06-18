Text fields for the contact section. Compose `Field` (label + marker + hint) around `Input` or `Textarea`.

```jsx
<Field label="Name" htmlFor="name" required>
  <Input id="name" placeholder="Your name" />
</Field>
<Field label="Email" htmlFor="email" optional hint="I'll only use it to reply.">
  <Input id="email" type="email" placeholder="you@company.com" />
</Field>
<Field label="Message" htmlFor="msg" required tone="ink">
  <Textarea id="msg" tone="ink" rows={6} placeholder="What are you trying to ship?" />
</Field>
```

Set `tone="ink"` on dark backgrounds. Amber focus ring on focus. Pass `error`/`error` text for validation states.
