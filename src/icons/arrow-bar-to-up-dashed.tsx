"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 10v10"}],["path",{"d":"M12 10l4 4"}],["path",{"d":"M12 10l-4 4"}],["path",{"d":"M4 4h3m13 0h-3m-3.5 0h-3"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3],"o":[12,12],"d":[0,-2.4]}];

export const ArrowBarToUpDashedIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowBarToUpDashedIcon.displayName = "ArrowBarToUpDashedIcon";
