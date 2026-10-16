"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 4h-4v16h4"}],["path",{"d":"M17 4h4v16h-4"}],["path",{"d":"M8 16h.01"}],["path",{"d":"M12 16h.01"}],["path",{"d":"M16 16h.01"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,2],"o":[5.51,12],"d":[-1.8,0]},{"fx":"nudge","n":[1,3,4],"o":[16.5,12],"d":[1.8,0]}];

export const BracketsContainIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BracketsContainIcon.displayName = "BracketsContainIcon";
