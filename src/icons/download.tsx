"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"}],["path",{"d":"M7 11l5 5l5 -5"}],["path",{"d":"M12 4l0 12"}]];
const rig: Rig[] = [{"fx":"nudge","n":[1,2],"o":[12,10],"d":[0,2.4]}];

export const DownloadIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DownloadIcon.displayName = "DownloadIcon";
