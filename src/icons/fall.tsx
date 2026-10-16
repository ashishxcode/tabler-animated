"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 21l1 -5l-1 -4l-3 -4h4l3 -3"}],["path",{"d":"M6 16l-1 -4l3 -4"}],["path",{"d":"M5 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M13.5 12h2.5l4 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[11.5,13],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[6.5,12],[6,5],[16.75,13]]}];

export const FallIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FallIcon.displayName = "FallIcon";
