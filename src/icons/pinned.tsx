"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 4v6l-2 4v2h10v-2l-2 -4v-6"}],["path",{"d":"M12 16l0 5"}],["path",{"d":"M8 4l8 0"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2],"o":[12,21],"d":[0,-2.2]}];

export const PinnedIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PinnedIcon.displayName = "PinnedIcon";
