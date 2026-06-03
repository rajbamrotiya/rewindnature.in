import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { dashboard } from '@/routes';

import { usePage } from '@inertiajs/react';
import { Users, UserPlus } from 'lucide-react';

export default function Dashboard({ todayVisitors }: { todayVisitors: number }) {
    const { totalVisitors } = usePage().props as { totalVisitors?: number };

    return (
        <>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative flex flex-col justify-center items-center overflow-hidden rounded-xl border border-sidebar-border/70 bg-white p-6 shadow-sm dark:bg-sidebar dark:border-sidebar-border">
                        <Users className="mb-2 h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                        <h3 className="text-lg font-semibold text-stone-700 dark:text-stone-300">Total Visitors</h3>
                        <p className="text-3xl font-bold text-emerald-950 dark:text-emerald-50">{totalVisitors}</p>
                    </div>
                    <div className="relative flex flex-col justify-center items-center overflow-hidden rounded-xl border border-sidebar-border/70 bg-white p-6 shadow-sm dark:bg-sidebar dark:border-sidebar-border">
                        <UserPlus className="mb-2 h-8 w-8 text-orange-500 dark:text-orange-400" />
                        <h3 className="text-lg font-semibold text-stone-700 dark:text-stone-300">Today's Visitors</h3>
                        <p className="text-3xl font-bold text-emerald-950 dark:text-emerald-50">{todayVisitors}</p>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};
