"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6l16 0"}],["path",{"d":"M4 18l5 0"}],["path",{"d":"M4 12h13a3 3 0 0 1 0 6h-4l2 -2m0 4l-2 -2"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2],"o":[12,13],"d":[2.4,0],"st":0.06}];

export const TextWrapIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TextWrapIcon.displayName = "TextWrapIcon";
