"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 3h10v8h-3l-4 2v-2h-3l0 -8"}],["path",{"d":"M15 16v4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h2"}],["path",{"d":"M10 18v.01"}]];
const rig: Rig[] = [{"fx":"tilt","n":[1],"o":[10,13],"a":-4},{"fx":"pop","n":[0,2],"a":0.3,"dl":0.12,"st":0.08,"os":[[16,8],[10,18.01]]}];

export const DeviceMobileMessageIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceMobileMessageIcon.displayName = "DeviceMobileMessageIcon";
