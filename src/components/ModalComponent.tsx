const ModalComponent = () => {
  return (
    <article className='fixed top-0 left-0 w-full h-full overflow-y-hidden block bg-purple-500 z-50'>
      <div className='bg-white h-48 w-[70%] p-[5%] '>
        <h1 className='h-[2000px]'>Modal Page</h1>
        <h3>This is a modal </h3>
        <p>It is meant to be unscrollable</p>
      </div>
    </article>
  );
};

export default ModalComponent;
