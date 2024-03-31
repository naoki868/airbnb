/*useStateでは同一コンポーネント内でしかstateの状態を維持できないので
sustandを利用して他のコンポーネント間で状態を維持できるようにしている
*/

import { create } from "zustand";

interface RegisterModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRegisterModal = create<RegisterModalStore>(set => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterModal;
