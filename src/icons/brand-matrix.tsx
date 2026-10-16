"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 3h-1v18h1"}],["path",{"d":"M20 21h1v-18h-1"}],["path",{"d":"M7 9v6"}],["path",{"d":"M12 15v-3.5a2.5 2.5 0 1 0 -5 0v.5"}],["path",{"d":"M17 15v-3.5a2.5 2.5 0 1 0 -5 0v.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4],"o":[12,12],"a":0.1}];

export const BrandMatrixIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandMatrixIcon.displayName = "BrandMatrixIcon";
