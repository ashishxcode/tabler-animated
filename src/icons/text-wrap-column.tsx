"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 9h7a3 3 0 0 1 0 6h-4l2 -2"}],["path",{"d":"M12 17l-2 -2"}],["path",{"d":"M3 3v18"}],["path",{"d":"M21 3v18"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3],"o":[12,12],"d":[2.4,0],"st":0.06}];

export const TextWrapColumnIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TextWrapColumnIcon.displayName = "TextWrapColumnIcon";
