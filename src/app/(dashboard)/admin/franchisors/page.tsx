import { redirect } from 'next/navigation';

export default function FranchisorsPage() {
    // For simplicity in this prototype, redirecting to Franchises as it's the main entity
    redirect('/admin/franchises');
}
