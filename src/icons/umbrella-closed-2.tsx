"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6.697 12.071l11.313 -7.071l-7.07 11.314l-4.243 -4.243"}],["path",{"d":"M8.743 14.475l-2.121 2.121c-1.886 1.886 .943 4.715 2.828 2.829"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1],"o":[12.01,6],"a":-8}];

export const UmbrellaClosed2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
UmbrellaClosed2Icon.displayName = "UmbrellaClosed2Icon";
