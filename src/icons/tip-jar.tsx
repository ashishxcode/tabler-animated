"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 10h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"}],["path",{"d":"M12 9v1"}],["path",{"d":"M12 16v1"}],["path",{"d":"M17 4v1.882c0 .685 .387 1.312 1 1.618s1 .933 1 1.618v8.882a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3v-8.882c0 -.685 .387 -1.312 1 -1.618s1 -.933 1 -1.618v-1.882"}],["path",{"d":"M6 4h12l-12 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[3],"o":[12,12.5],"a":0.06},{"fx":"pop","n":[0,1,2,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,13],[12,9.5],[12,16.5],[12,4]]}];

export const TipJarIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TipJarIcon.displayName = "TipJarIcon";
