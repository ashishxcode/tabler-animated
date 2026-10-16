"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 7l-4 -4l-4 4"}],["path",{"d":"M6 21v.01"}],["path",{"d":"M6 18.01v.01"}],["path",{"d":"M7 15.02v.01"}],["path",{"d":"M10 13.03v.01"}],["path",{"d":"M12 3v5.394a6.737 6.737 0 0 0 3 5.606a6.737 6.737 0 0 1 3 5.606v1.394"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3,4,5],"o":[12,12.01],"d":[2.4,0]}];

export const ArrowMergeAltRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowMergeAltRightIcon.displayName = "ArrowMergeAltRightIcon";
