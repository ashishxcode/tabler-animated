"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 4l-3 3l3 3"}],["path",{"d":"M18 4l3 3l-3 3"}],["path",{"d":"M4 16a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -2"}],["path",{"d":"M10 7h-7"}],["path",{"d":"M21 7h-7"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3,4],"o":[12,12],"d":[2.4,0]}];

export const ArrowAutofitContentIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowAutofitContentIcon.displayName = "ArrowAutofitContentIcon";
