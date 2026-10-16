"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 9l4 -4l4 4m-4 -4v14"}],["path",{"d":"M21 15l-4 4l-4 -4m4 4v-14"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0],"o":[7,12],"d":[0,-2.2]},{"fx":"nudge","n":[1],"o":[17,12],"d":[0,2.2]}];

export const ArrowsSortIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowsSortIcon.displayName = "ArrowsSortIcon";
