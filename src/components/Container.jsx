import React from "react";

function Container({ children, classProp}) {
  return <div className={`container ${classProp} flex flex-col gap-6 px-[20px] xs:max-w-[490px] w-[100%] sm:max-w-[600px] md:max-w-[720px] lg:max-w-[950px] xl:max-w-[1100px] 2xl:max-w-[1368px] mx-[auto]`}>{children}</div>;
}

export default Container;
