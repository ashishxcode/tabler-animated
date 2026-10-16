"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 8l0 4l2 2"}],["path",{"d":"M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5"}]];
const rig: Rig[] = [{"fx":"spin","n":[0],"o":[12,12],"a":-360},{"fx":"pop","n":[1],"o":[12.03,11.91],"a":0.05}];

export const HistoryIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HistoryIcon.displayName = "HistoryIcon";
