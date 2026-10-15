"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type ImageModalProps = {
  image: { src: string; alt: string } | null;
  prefix: string;
  onClose: () => void;
};

export default function ImageModal({ image, prefix, onClose }: ImageModalProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const onCloseRef = useRef(onClose);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  onCloseRef.current = onClose;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!image || !dialog) return;

    const body = document.body;
    const previousScrollY = window.scrollY;
    const previousBodyStyles = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
    };
    previousFocusRef.current = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${previousScrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    dialog.showModal();
    closeButtonRef.current?.focus();

    return () => {
      if (dialog.open) dialog.close();
      body.style.overflow = previousBodyStyles.overflow;
      body.style.position = previousBodyStyles.position;
      body.style.top = previousBodyStyles.top;
      body.style.left = previousBodyStyles.left;
      body.style.right = previousBodyStyles.right;
      body.style.width = previousBodyStyles.width;
      window.scrollTo(0, previousScrollY);
      previousFocusRef.current?.focus({ preventScroll: true });
    };
  }, [image]);

  if (!image) return null;

  return (
    <dialog
      ref={dialogRef}
      className="image-preview-dialog"
      aria-labelledby="image-preview-title"
      aria-modal="true"
      onClose={() => onCloseRef.current()}
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current?.close();
      }}
    >
      <h2 id="image-preview-title" className="sr-only">Screenshot preview</h2>
      <div className="image-preview-content">
        <Image
          src={prefix + image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 90vw"
          className="image-preview-full"
        />
        <button
          ref={closeButtonRef}
          type="button"
          className="image-preview-close"
          aria-label="Close screenshot preview"
          onClick={() => dialogRef.current?.close()}
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
    </dialog>
  );
}
