type MediaTodoProps = {
  src: string;
};

export function ImageTodo({ src }: MediaTodoProps) {
  return (
    <aside className="my-10 border border-dashed border-black/25 px-5 py-6">
      <p className="text-[10px] tracking-[0.16em] text-[#7660D8]">TODO</p>
      <p className="mt-2 text-sm leading-6 text-black/70">
        Image could not be downloaded from the original host. Angéline: replace
        this with the file.
      </p>
      <p className="mt-3 break-all text-xs leading-5 text-black/45">{src}</p>
    </aside>
  );
}
