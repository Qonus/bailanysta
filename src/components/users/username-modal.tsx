// 'use client';

// import { Button } from '@/components/ui/button';
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
// import { Input } from '@/components/ui/input';
// import { useEffect, useState } from 'react';

// export default function ForceUsernameModal({ initialUsername }: { initialUsername: string | null }) {
//     const [username, setUsername] = useState(initialUsername ?? '');
//     const [open, setOpen] = useState(false);
//     const [tempUsername, setTempUsername] = useState('');

//     useEffect(() => {
//         if (!initialUsername) {
//             setOpen(true);
//         }
//     }, [initialUsername]);

//     const handleSave = () => {
//         if (tempUsername.trim() !== '') {
//             setUsername(tempUsername.trim());
//             setOpen(false);
//             // Here you would probably call your backend to save it
//             // Example: await updateUsername(tempUsername)
//         }
//     };

//     return (
//         <Dialog open={open} onOpenChange={() => { }}>
//             <DialogContent
//                 className="sm:max-w-md"
//                 onInteractOutside={(e) => e.preventDefault()} // prevent closing by clicking outside
//                 onEscapeKeyDown={(e) => e.preventDefault()}   // prevent closing with Esc key
//             >
//                 <DialogHeader>
//                     <DialogTitle>Set your username</DialogTitle>
//                 </DialogHeader>

//                 <div className="flex flex-col gap-4">
//                     <Input
//                         placeholder="Enter your username"
//                         value={tempUsername}
//                         onChange={(e) => setTempUsername(e.target.value)}
//                     />
//                     <Button onClick={handleSave} disabled={tempUsername.trim() === ''}>
//                         Save
//                     </Button>
//                 </div>
//             </DialogContent>
//         </Dialog>
//     );
// }
