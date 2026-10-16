"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}],["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M15 15l3.35 3.35"}],["path",{"d":"M9 15l-3.35 3.35"}],["path",{"d":"M5.65 5.65l3.35 3.35"}],["path",{"d":"M18.35 5.65l-3.35 3.35"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,12],[16.68,16.68],[7.33,16.68],[7.33,7.33],[16.68,7.33]]}];

export const LifebuoyIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LifebuoyIcon.displayName = "LifebuoyIcon";
