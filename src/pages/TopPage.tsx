import { TopOrganism } from 'organisms/TopOrganism';
import { PageTemplate } from 'templates/PageTemplate';

export function TopPage() {
  return (
    <PageTemplate>
      <h1>Top</h1>
      <TopOrganism />
    </PageTemplate>
  );
}
