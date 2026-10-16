"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 4h4v16h-4"}],["path",{"d":"M5 16h.01"}],["path",{"d":"M9 16h.01"}],["path",{"d":"M13 16h.01"}]];
const rig: Rig[] = [{"fx":"nudge","n":[1,2],"o":[7.01,16],"d":[-1.8,0]},{"fx":"nudge","n":[0,3],"o":[15.5,12],"d":[1.8,0]}];

export const BracketsContainEndIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BracketsContainEndIcon.displayName = "BracketsContainEndIcon";
