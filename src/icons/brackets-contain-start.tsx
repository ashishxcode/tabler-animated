"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 4h-4v16h4"}],["path",{"d":"M18 16h-.01"}],["path",{"d":"M14 16h-.01"}],["path",{"d":"M10 16h-.01"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,3],"o":[7.5,12],"d":[-1.8,0]},{"fx":"nudge","n":[1,2],"o":[16,16],"d":[1.8,0]}];

export const BracketsContainStartIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BracketsContainStartIcon.displayName = "BracketsContainStartIcon";
