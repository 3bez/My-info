One entry in the experience timeline (node + rail + content). Stack several inside a container; mark the latest `current`.

```jsx
<TimelineEntry
  current
  period="2021 — Present"
  role="Senior Technical Project Manager"
  company="Northwind"
  location="Remote"
  description="Lead delivery across platform and payments squads."
  tags={["agile", "roadmapping", "stakeholders"]}
/>
```

`tone="ink"` for dark sections. The rail line connects entries — keep them as direct siblings.
