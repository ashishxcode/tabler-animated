"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12"}],["path",{"d":"M8 16v.01"}],["path",{"d":"M8 12v.01"}],["path",{"d":"M8 8v.01"}],["path",{"d":"M16 16v.01"}],["path",{"d":"M16 12v.01"}],["path",{"d":"M16 8v.01"}],["path",{"d":"M12 8v.01"}],["path",{"d":"M12 16v.01"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3,4,5,6,7,8],"o":[12,20],"d":[0,-1.5]}];

export const BoxPaddingIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BoxPaddingIcon.displayName = "BoxPaddingIcon";
