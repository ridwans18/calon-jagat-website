function ProdukContain({ children, img }) {
  return (
    <div className="flex items-start gap-4">
      <img className="w-20 h-20 rounded object-cover" src={img} alt="" />

      <div>{children}</div>
    </div>
  );
}

export default ProdukContain;
