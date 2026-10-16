"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 12c-.819 -.388 -2.223 -.5 -3.19 -.5a6.31 6.31 0 0 0 -6.31 6.31c0 .966 .113 2.371 .5 3.19"}],["path",{"d":"M12 21c4 0 9 -5 9 -9a9 9 0 1 0 -9 9"}],["path",{"d":"M9 10h.01"}],["path",{"d":"M15 10h.01"}],["path",{"d":"M8.75 15c.878 .672 1.746 1 3 1"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[16.25,16.25],[9,10],[15.01,10],[10.25,15.5]]}];

export const StickerSmileIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
StickerSmileIcon.displayName = "StickerSmileIcon";
