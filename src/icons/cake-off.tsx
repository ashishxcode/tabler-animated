"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 17v-5a3 3 0 0 0 -3 -3h-5m-4 0h-3a3 3 0 0 0 -3 3v8h17"}],["path",{"d":"M3 14.803c.312 .135 .654 .204 1 .197a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1m4 0a2.4 2.4 0 0 0 2 1c.35 .007 .692 -.062 1 -.197"}],["path",{"d":"M10.172 6.188c.07 -.158 .163 -.31 .278 -.451l1.55 -1.737l1.465 1.638a2 2 0 0 1 -.65 3.19"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0],"o":[12,14.5],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,14],[12.09,6.41]]}];

export const CakeOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CakeOffIcon.displayName = "CakeOffIcon";
