"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 4v1.882c0 .685 .387 1.312 1 1.618s1 .933 1 1.618v8.882a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3v-8.882c0 -.685 .387 -1.312 1 -1.618s1 -.933 1 -1.618v-1.882"}],["path",{"d":"M6 4h12l-12 0"}],["path",{"d":"M12 13h-3"}],["path",{"d":"M14 10.172a3 3 0 1 0 0 5.656"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12.5],"a":0.14}];

export const TipJarEuroIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TipJarEuroIcon.displayName = "TipJarEuroIcon";
