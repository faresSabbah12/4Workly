import type { ReactNode } from 'react';
import { X } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ModalVariant } from './types/modal.types';

type ModalButtonVariant = 'default' | 'outline' | 'ghost' | 'destructive';

interface ModalButton {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: ModalButtonVariant;
}

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  children?: ReactNode;
  variant?: ModalVariant;
  buttons?: ModalButton[];
  closeButtonText?: string;
}

const modalVariantStyles: Record<ModalVariant, string> = {
  [ModalVariant.DEFAULT]: 'border-border',
  [ModalVariant.SUCCESS]: 'border-green-500/40 shadow-green-500/10',
  [ModalVariant.ERROR]: 'border-red-500/40 shadow-red-500/10',
  [ModalVariant.WARNING]: 'border-yellow-500/40 shadow-yellow-500/10',
  [ModalVariant.INFO]: 'border-blue-500/40 shadow-blue-500/10',
};

const modalTitleStyles: Record<ModalVariant, string> = {
  [ModalVariant.DEFAULT]: 'text-card-foreground',
  [ModalVariant.SUCCESS]: 'text-green-500',
  [ModalVariant.ERROR]: 'text-red-500',
  [ModalVariant.WARNING]: 'text-yellow-500',
  [ModalVariant.INFO]: 'text-blue-500',
};

export function Modal({
  open,
  onOpenChange,
  title,
  children,
  variant = ModalVariant.DEFAULT,
  buttons = [],
  closeButtonText = 'Close',
}: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          'bg-card text-card-foreground max-h-[90vh] overflow-y-auto rounded-3xl border p-0 shadow-2xl backdrop-blur-xl sm:max-w-[800px]',
          modalVariantStyles[variant],
        )}
      >
        <button
          type="button"
          aria-label="Close modal"
          onClick={() => onOpenChange(false)}
          className="text-muted-foreground hover:bg-muted hover:text-foreground absolute top-4 right-4 rounded-xl p-2 transition-all"
        >
          <X className="size-5" />
        </button>

        <div className="px-6 pt-6">
          {title && (
            <DialogHeader>
              <DialogTitle
                className={cn(
                  'text-xl font-semibold',
                  modalTitleStyles[variant],
                )}
              >
                {title}
              </DialogTitle>
            </DialogHeader>
          )}
        </div>

        {children && <div className="px-6 py-5">{children}</div>}

        <div className="border-border/60 bg-muted/20 flex items-center justify-end gap-3 border-t px-6 py-4">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="
                rounded-full
                bg-background/40
                px-6
                py-4
                backdrop-blur-md
                hover:bg-background/60
            "
          >
            {closeButtonText}
          </Button>

          {buttons.map((button) => (
            <Button
              key={button.label}
              variant={button.variant ?? 'default'}
              disabled={button.disabled}
              onClick={button.onClick}
            >
              {button.label}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
