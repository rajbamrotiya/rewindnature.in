import { Head } from '@inertiajs/react';
import { dashboard } from '@/routes';
import { messages } from '@/routes/dashboard';
import { useState } from 'react';
import { Mail, Calendar, Search, Eye } from 'lucide-react';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';

interface ContactMessage {
    id: number;
    name: string;
    email: string;
    subject: string;
    message: string;
    created_at: string;
}

interface Props {
    messages: ContactMessage[];
}

export default function DashboardMessages({ messages: initialMessages = [] }: Props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeMessage, setActiveMessage] = useState<ContactMessage | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const filteredMessages = initialMessages.filter((msg) =>
        msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.message.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleViewDetail = (msg: ContactMessage) => {
        setActiveMessage(msg);
        setIsDialogOpen(true);
    };

    return (
        <>
            <Head title="Contact Messages" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4 lg:p-6 bg-stone-50/30 dark:bg-stone-950/10">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">Contact Messages</h1>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                            Manage all inquiries submitted through the Contact Us page in a clean tabular overview.
                        </p>
                    </div>
                    {/* Search Field */}
                    <div className="relative w-full max-w-sm">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                        <input
                            type="text"
                            placeholder="Search messages..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 pl-9 pr-4 py-2 text-sm text-neutral-900 dark:text-neutral-50 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                    </div>
                </div>

                {/* Messages Listing Table */}
                <div className="mt-4 w-full">
                    {filteredMessages.length === 0 ? (
                        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-200 dark:border-neutral-800 p-12 text-center bg-white dark:bg-neutral-900">
                            <Mail className="h-10 w-10 text-neutral-400 mb-3 animate-bounce" />
                            <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">No messages found</p>
                            <p className="text-xs text-neutral-500">There are no contact messages matching your query.</p>
                        </div>
                    ) : (
                        <div className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm">
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse text-left text-sm text-neutral-500 dark:text-neutral-400">
                                    <thead className="bg-neutral-50 dark:bg-neutral-850 text-xs font-semibold uppercase text-neutral-700 dark:text-neutral-300 border-b border-neutral-200 dark:border-neutral-800">
                                        <tr>
                                            <th scope="col" className="px-6 py-4 font-bold">Name</th>
                                            <th scope="col" className="px-6 py-4 font-bold">Email</th>
                                            <th scope="col" className="px-6 py-4 font-bold">Subject</th>
                                            <th scope="col" className="px-6 py-4 font-bold">Received Date</th>
                                            <th scope="col" className="px-6 py-4 font-bold text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800 border-t border-neutral-200 dark:border-neutral-800">
                                        {filteredMessages.map((msg) => (
                                            <tr key={msg.id} className="hover:bg-neutral-50/50 dark:hover:bg-neutral-800/10 transition-colors">
                                                <td className="px-6 py-4 font-semibold text-neutral-900 dark:text-neutral-100 whitespace-nowrap">
                                                    {msg.name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <a href={`mailto:${msg.email}`} className="hover:underline hover:text-emerald-600 transition-colors">
                                                        {msg.email}
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4 max-w-xs truncate font-medium text-emerald-800 dark:text-emerald-400">
                                                    {msg.subject}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-xs text-neutral-400">
                                                    {new Date(msg.created_at).toLocaleString()}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                                    <button
                                                        onClick={() => handleViewDetail(msg)}
                                                        className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100/60 dark:hover:bg-emerald-900/40 transition-colors"
                                                    >
                                                        <Eye className="h-3.5 w-3.5" />
                                                        View Details
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>

                {/* Dialog Overlay Modal for Full Message Details */}
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogContent className="sm:max-w-2xl">
                        {activeMessage && (
                            <>
                                <DialogHeader className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 text-lg font-bold">
                                            {activeMessage.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div className="min-w-0 text-left">
                                            <DialogTitle className="font-bold text-base text-neutral-900 dark:text-neutral-50 truncate">{activeMessage.name}</DialogTitle>
                                            <DialogDescription className="text-xs text-neutral-500 flex items-center gap-1.5 mt-0.5">
                                                <Mail className="h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-500" />
                                                <a href={`mailto:${activeMessage.email}`} className="hover:underline hover:text-emerald-700 truncate">
                                                    {activeMessage.email}
                                                </a>
                                            </DialogDescription>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-between gap-4 mt-3 text-left">
                                        <span className="text-xs font-semibold text-emerald-950 dark:text-emerald-200 bg-emerald-50 dark:bg-emerald-950/45 px-3 py-1.5 rounded-full border border-emerald-100/50 dark:border-emerald-900/30">
                                            Subject: {activeMessage.subject}
                                        </span>
                                        <span className="text-xs text-neutral-400 flex items-center gap-1">
                                            <Calendar className="h-3.5 w-3.5" />
                                            {new Date(activeMessage.created_at).toLocaleString()}
                                        </span>
                                    </div>
                                </DialogHeader>
                                <div className="py-6 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 whitespace-pre-wrap font-sans max-h-[350px] overflow-y-auto">
                                    {activeMessage.message}
                                </div>
                                <DialogFooter className="border-t border-neutral-200 dark:border-neutral-800 pt-4">
                                    <DialogClose asChild>
                                        <button className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800/80 transition-colors">
                                            Close
                                        </button>
                                    </DialogClose>
                                </DialogFooter>
                            </>
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </>
    );
}

DashboardMessages.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
        {
            title: 'Contact Messages',
            href: messages().url,
        },
    ],
};
