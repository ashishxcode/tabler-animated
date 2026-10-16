"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9.171 9.172a4 4 0 0 0 5.65 5.663m1.179 -2.835a4 4 0 0 0 -4 -4"}],["path",{"d":"M5.64 5.632a9 9 0 1 0 12.73 12.725m1.667 -2.301a9 9 0 0 0 -12.077 -12.1"}],["path",{"d":"M15 15l3.35 3.35"}],["path",{"d":"M9 15l-3.35 3.35"}],["path",{"d":"M5.65 5.65l3.35 3.35"}],["path",{"d":"M18.35 5.65l-3.35 3.35"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[6],"o":[12,12],"dl":0.25},{"fx":"pop","n":[2],"o":[16.68,16.68],"a":0.35,"dl":0.2},{"fx":"pop","n":[1],"o":[11.98,12.02],"a":0.06},{"fx":"pop","n":[0,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[12.01,11.99],[7.33,16.68],[7.33,7.33],[16.68,7.33]]}];

export const LifebuoyOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LifebuoyOffIcon.displayName = "LifebuoyOffIcon";
