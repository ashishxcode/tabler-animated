"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4"}],["path",{"d":"M12 13l0 9"}],["path",{"d":"M9 19l3 3l3 -3"}]];
const rig: Rig[] = [{"fx":"float","n":[0],"o":[12.35,11.47]},{"fx":"nudge","n":[1,2],"o":[12,17.5],"d":[0,2.2],"dl":0.1}];

export const CloudDownloadIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CloudDownloadIcon.displayName = "CloudDownloadIcon";
