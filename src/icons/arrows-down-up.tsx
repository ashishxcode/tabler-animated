"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 3l0 18"}],["path",{"d":"M10 18l-3 3l-3 -3"}],["path",{"d":"M7 21l0 -18"}],["path",{"d":"M20 6l-3 -3l-3 3"}]];
const rig: Rig[] = [{"fx":"nudge","n":[1,2],"o":[7,12],"d":[0,-2.2]},{"fx":"nudge","n":[0,3],"o":[17,12],"d":[0,2.2]}];

export const ArrowsDownUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowsDownUpIcon.displayName = "ArrowsDownUpIcon";
