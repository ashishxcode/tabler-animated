"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"}],["path",{"d":"M9 15l3 -3l3 3"}],["path",{"d":"M12 12l0 9"}]];
const rig: Rig[] = [{"fx":"float","n":[0],"o":[12.4,11.47]},{"fx":"nudge","n":[1,2],"o":[12,16.5],"d":[0,-2.2],"dl":0.1}];

export const CloudUploadIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CloudUploadIcon.displayName = "CloudUploadIcon";
