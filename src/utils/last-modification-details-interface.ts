interface lastUserAgentDetails {
  userAgent: string
  updatedAt: Date
}

interface lastMigrationDetails {
  migrationName: string
  updatedAt: Date
}

export interface lastModificationDetails {
  lastUserAgentDetails: lastUserAgentDetails;
  lastMigrationDetails: lastMigrationDetails;
}
