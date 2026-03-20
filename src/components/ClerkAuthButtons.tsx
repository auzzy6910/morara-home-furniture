import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';

interface AuthButtonsProps {
  variant: 'desktop' | 'mobile';
}

export default function ClerkAuthButtons({ variant }: AuthButtonsProps) {
  if (variant === 'desktop') {
    return (
      <>
        <SignedOut>
          <div className="hidden md:flex items-center gap-4">
            <SignInButton mode="modal">
              <button className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">Log In</button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="bg-red-600 hover:bg-red-700 text-white rounded-full font-medium text-sm px-4 py-2 transition-colors">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </>
    );
  }

  return (
    <SignedOut>
      <div className="flex flex-col gap-2 mt-2 px-3">
        <SignInButton mode="modal">
          <button className="text-gray-700 hover:text-red-600 font-medium text-left min-h-[44px]">Log In</button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button className="bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium text-center py-3 transition-colors min-h-[44px]">
            Sign Up
          </button>
        </SignUpButton>
      </div>
    </SignedOut>
  );
}
