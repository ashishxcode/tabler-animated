"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 17v4h1a2 2 0 1 0 0 -4h-1"}],["path",{"d":"M17 11h1.5a1.5 1.5 0 0 0 0 -3h-1.5v5"}],["path",{"d":"M3 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M5 7v3a1 1 0 0 0 1 1h3v7a1 1 0 0 0 1 1h3"}],["path",{"d":"M9 11h4"}]];
const rig: Rig[] = [{"fx":"pop","n":[3],"o":[9,13],"a":0.06},{"fx":"pop","n":[0,1,2,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[18.5,19],[18.5,10.5],[5,5],[11,11]]}];

export const AutomaticGearboxIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AutomaticGearboxIcon.displayName = "AutomaticGearboxIcon";
